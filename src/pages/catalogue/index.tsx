import { useState } from 'react';
import setTitle from "../../helper/title/title";
import css from './.module.scss';
import Card from "./card/card"; 
import obats from "./obats.json";

// Define an interface for the structure of a medicine object
interface Medicine {
    img: string;
    title: string;
    price: number;
    category: string; 
}


export default function Catalogue() {
    setTitle("Medicine");

    // Define filter categories and options
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


    const handleFilterChange = (category: string, value: string) => { 
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: value
        }));
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
                {/* Render filter options */}
                {Object.entries(filterOptions).map(([category, options]) => (
                    <div key={category} className={css.categoryContainer}>
                        {/* Render radio buttons for each option */}
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
                {/* Render filtered cards */}
                {filteredObats.map(obat => (
                    <Card imgPath={obat.img} title={obat.title} price={obat.price}/>
                ))}
            </div>
        </div>
    );
}
