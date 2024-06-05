import { useState } from "react";
import style from "./.module.scss"

// import icon from "./search.png"

interface InputBarProps {
    leftIcon?: string;
    rightIcon?: string;
    placeholder?: string;
    OnSubmit?: (value: string) => void;
    OnChange?: (value: string) => void;
    borderRadius?: number;
}

// export default function SearchBar

const InputBar: React.FC<InputBarProps> = ({ leftIcon, rightIcon, placeholder, OnSubmit, OnChange, borderRadius }) => {
    // console.log(!!leftIcon)

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setInputValue(value);
        OnChange && OnChange(value);
        // console.log(value)
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter' && OnSubmit) && OnSubmit(inputValue);
    };

    placeholder = placeholder ? placeholder : "";
    borderRadius = borderRadius ? borderRadius : 20;

    const style_int: { [key: string]: React.CSSProperties } = {
        b_r: {
            // borderRadius: `${borderRadius}px`,
            borderRadius: borderRadius,
        }
    }

    return (
        <div className={style.cont}>
            {leftIcon && <img className={style.l_ico} src={leftIcon} alt="" />}
            {rightIcon && <img className={style.r_ico} src={rightIcon} alt="" />}
            <input
                className={`${style.searchBar} ${leftIcon && style.p_l} ${rightIcon && style.p_r}`}
                type="text"
                placeholder={placeholder}
                style={style_int.b_r}
                // onKeyDown={(e) => {
                //     (OnSubmit && e.key === 'Enter') && OnSubmit(e.currentTarget.value);
                //     OnChange && OnChange(e.currentTarget.value);
                //     console.log(e.currentTarget.value)
                // }}

                // onChange={(e) =>{
                //     if (OnChange) {
                //         OnChange(e.currentTarget.value);
                //     }
                // }}
                
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default InputBar