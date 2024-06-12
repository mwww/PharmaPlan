import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import css from './.module.scss';

// Define a type for the items
interface CartItem {
    img: string;
    title: string;
    price: number;
    count?: number;
}

const Checkout: React.FC = () => {
    const location = useLocation();
    const { items } = location.state || { items: [] };

    // Calculate total price
    const totalPrice = items.reduce((total: number, item: CartItem) => total + (item.price * (item.count || 1)), 0);
    
    // State to control the visibility of the QR code
    const [isShowQR, setShowQR] = useState(false);

    // Function to handle showing/hiding the QR code
    const handleShowQR = () => {
        setShowQR(!isShowQR);
    }

    return (
        <div className={css.checkoutContainer}>
            <h2>Checkout</h2>
            <ul className={css.checkoutList}>
                {items.map((item: CartItem, index: number) => (
                    <li key={index} className={css.checkoutItem}>
                        <img src={item.img} alt={item.title} className={css.checkoutImage} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Rp.{item.price.toLocaleString()}</p>
                            <p>Count: {item.count}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={css.checkoutTotal}>
                {!isShowQR && <h5>Click to show QR code</h5>} 
                <img src="/PharmaPlan/assets/qris.webp" alt="" onClick={handleShowQR} />
                {/* Conditional rendering of the QR code */}
                {isShowQR && <img src="/PharmaPlan/assets/QR.png" alt="" />}
                <p>Total Price: Rp.{totalPrice.toLocaleString()}</p>
            </div>
            <div className={css.checkoutButtonContainer}>
                <button className={css.checkoutButton}>Confirm Purchase</button>
            </div>
        </div>
    );
};

export default Checkout;
