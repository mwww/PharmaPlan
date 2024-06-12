import { useState } from 'react';
import setTitle from "../../helper/title/title";
import css from './.module.scss';
import Card from "./card/card"; 
import CartSidebar from './cartSideBar/cartSidebar';
import obats from "./obats.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface Medicine {
    img: string;
    title: string;
    price: number;
    category: string; 
    count?: number;
}

export default function Catalogue() {
    setTitle("Medicine");

    const filterOptions = {
        category: [
        "All",
        "Antacids",
        "Asthma",
        "Cholesterol",
        "Cold & Flu",
        "Cough",
        "Emergency Contraceptives",
        "Pain Relief"] 
    };

    const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string}>({}); 
    const [cartItems, setCartItems] = useState<Medicine[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleFilterChange = (category: string, value: string) => { 
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: value
        }));
    };

    const handleAddToCart = (item: Medicine) => {
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.title === item.title);
    
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex] = {
                ...updatedCartItems[existingItemIndex],
                count: (updatedCartItems[existingItemIndex].count || 0) + 1
            };
            setCartItems(updatedCartItems);
        } else {
            setCartItems(prevItems => [...prevItems, { ...item, count: 1 }]);
        }
    
        setIsSidebarOpen(true);
    };

    const handleRemoveItem = (title: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.title !== title));
    };
    
    const sidebarOpen = () => {
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const filteredObats = obats.filter((obat: Medicine) => {
        for (const category in selectedFilters) {
            const trimmedCategory = category.trim();
            if (selectedFilters[trimmedCategory] !== 'All' && obat[trimmedCategory as keyof Medicine] !== selectedFilters[trimmedCategory]) {
                return false;
            }
        }
        return true;
    });

    return (
        <div className={css.cont}>
            <div>
                <h5>Categories</h5>
                {Object.entries(filterOptions).map(([category, options]) => (
                    <div key={category} className={css.categoryContainer}>
                        {options.map(option => (
                            <label key={option} className={css.radioLabel}>
                                <input
                                    type="radio"
                                    name={category}
                                    value={option}
                                    checked={selectedFilters[category] === option}
                                    onChange={() => handleFilterChange(category, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                {filteredObats.map(obat => (
                    <Card 
                        key={obat.title}
                        imgPath={obat.img} 
                        title={obat.title} 
                        price={obat.price} 
                        onAddToCart={() => handleAddToCart(obat)}
                    />
                ))}
            </div>
            <CartSidebar 
                items={cartItems} 
                isOpen={isSidebarOpen} 
                onClose={handleCloseSidebar} 
                onRemoveItem={handleRemoveItem} // Pass down the remove handler
            />
            {!isSidebarOpen ? (
                <div className={css.sidebar_button} onClick={sidebarOpen}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            ) : null}
        </div>
    );
}
