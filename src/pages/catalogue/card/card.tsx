import css from './.module.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface _cardProps {
    imgPath: string;
    title: string;
    price: number;
    onAddToCart?: () => void; // Add the onAddToCart property with an optional modifier
}



const _card: React.FC<_cardProps> = ({imgPath, title, price, onAddToCart}: _cardProps) => {
    const style: { [key: string]: React.CSSProperties } = {
        b_i: {
            // borderRadius: `${borderRadius}px`,
            backgroundImage: `url(${imgPath})`,
            // backgroundImage: imgPath,
        }
    }
    const [count, setCount] = useState<number>(0);
    function incrementCount(){
        setCount(count + 1);
        console.log(count);
    }
    return (
        <div className={css.cont}>
            <div style={style.b_i}> {/* bg image here */} </div>
            <div>
                <h5>{title}</h5>
                <div className={css.bot_card}>
                    <p>{`Rp. ${price.toLocaleString()}`}</p>
                    <div className={css.icon}>
                        <FontAwesomeIcon icon={faShoppingCart} onClick={onAddToCart} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default _card