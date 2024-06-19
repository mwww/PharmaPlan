import React, { useState, useEffect } from "react";
import style from "./.module.scss";
import Items from "./obats.json";
import { Link } from "react-router-dom";

interface InputBarProps {
  leftIcon?: string;
  rightIcon?: string;
  placeholder?: string;
  OnSubmit?: (value: string) => void;
  OnChange?: (value: string) => void;
  borderRadius?: number;
  maxItemsToShow?: number;
  debounceDelay?: number;
}

interface Item {
  img: string;
  title: string;
  price: number;
  category: string;
}

const InputBar: React.FC<InputBarProps> = ({
  leftIcon,
  rightIcon,
  placeholder,
  OnSubmit,
  OnChange,
  borderRadius,
  maxItemsToShow = 5,
  debounceDelay = 200,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = Items.filter(
        (item) =>
          item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
    }, debounceDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, debounceDelay]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInputValue(value);
    OnChange && OnChange(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && OnSubmit) {
      OnSubmit(inputValue);
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  placeholder = placeholder ? placeholder : "";
  borderRadius = borderRadius ? borderRadius : 20;

  const style_int: { [key: string]: React.CSSProperties } = {
    b_r: {
      borderRadius: borderRadius,
    },
  };

  return (
    <div className={style.cont}>
      {leftIcon && <img className={style.l_ico} src={leftIcon} alt="" />}
      {rightIcon && <img className={style.r_ico} src={rightIcon} alt="" />}
      <input
        className={`${style.searchBar} ${
          leftIcon && style.p_l
        } ${rightIcon && style.p_r}`}
        type="text"
        placeholder={placeholder}
        style={style_int.b_r}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {/* Render filtered items only if there's input and if the input is focused */}
      {inputValue && isInputFocused && filteredItems.length > 0 && (
        <div className={style.itemContainer}>
          {filteredItems.slice(0, maxItemsToShow).map((item) => (
            <Link to="/medicine" style={{ textDecoration: 'none' }} key={item.title} className={style.item}>
              <div className={style.item_bi} style={{ '--background-img': `url(${item.img})` } as React.CSSProperties}></div>
              <div className={style.item_details}>
                <h4>{item.title}</h4>
                <p>Rp. {item.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputBar;
