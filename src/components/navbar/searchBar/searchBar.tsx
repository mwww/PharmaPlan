import { useRef, useEffect } from "react";
import style from "./.module.scss"

// import icon from "./search.png"

interface SearchBarProps {
    icon?: string;
    placeholder: string;
    OnSubmit: () => void;
}

// export default function SearchBar

const SearchBar: React.FC<SearchBarProps> = ({ icon, placeholder, OnSubmit }) => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        inputsRef.current.forEach(input => {
            if (input) {
                input.size = input.placeholder.length;
            }
        });
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            OnSubmit();
        }
    };

    return (
        <div className={style.cont}>
            {icon && <img src={icon} alt="search icon" />}
            <input
                ref={el => inputsRef.current[0] = el}
                className={style.searchBar}
                type="text"
                name="searchQuery"
                id="searchQuery"
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default SearchBar