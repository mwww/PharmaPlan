import React from 'react';
import css from './.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface CartSidebarProps {
    items: { img: string, title: string, price: number, count?: number }[];
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    onClose: () => void;
    onRemoveItem: (title: string) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ items, isOpen, setIsOpen, onClose, onRemoveItem }) => {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout', { state: { items } });
    };

    const handleBlockerClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={`${css.wrapper} ${isOpen ? css.open : ''}`}>
            <div className={`${css.blocker} ${isOpen ? css.open : ''}`} onClick={handleBlockerClick}></div>
            <div className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
                <div>
                    <div className={css.sidebarHeader}>
                        <button className={css.closeButton} onClick={onClose}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <h2>Cart</h2>
                    </div>
                    <ul className={`${css.cartList} ${items.length < 1 && css.empty}`}>
                        {items.length > 0 ? items.map((item, index) => (
                            <li key={index} className={css.cartItem}>
                                <img src={item.img} alt={item.title} className={css.cartImage} />
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>Rp.{item.price.toLocaleString()}</p>
                                    <p>Count: {item.count}</p>
                                </div>
                                <button 
                                    className={css.removeButton} 
                                    onClick={() => onRemoveItem(item.title)}
                                >
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            </li>
                        )) : (<p>No items in cart!</p>)}
                    </ul>
                </div>
                <div className={css.checkoutButtonContainer} onClick={handleCheckout}>
                        <h2>Checkout</h2>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
