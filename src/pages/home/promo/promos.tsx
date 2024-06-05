// import { Link } from 'react-router-dom';
import css from './.module.scss';
import blu from './blu.png';
import gopay from './gopay.png';

export default function Hero() {
    return (
        <div className={css.promos_container}>
            <h1>Hot Promo</h1>
            <div className={css.promos}>
                <img src={blu} alt="" />
                <img src={gopay} alt="" />
            </div>
        </div>
    )
}