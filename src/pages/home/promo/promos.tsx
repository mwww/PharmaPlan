// import { Link } from 'react-router-dom';
import css from './.module.scss';

export default function Hero() {
    return (
        <div className={css.promos_container}>
            <h1>Hot Promo</h1>
            <div className={css.promos}>
                <img src="./assets/Home/blu.png" alt="" />
                <img src="./assets/Home/gopay.png" alt="" />
            </div>
        </div>
    )
}