import css from './.module.scss';
import planb from './Planb.png';
import panadol from './Panadol.png';
import tremenza from './Tremenza.png';
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className={css.items_container}>
            <h1>Trace back to your last bought Items</h1>
            
            <div className={css.items}>
                <Link to='/PharmaPlan/medicine'>
                <div className={css.item_card}>
                    <div className={css.items_img_container}>
                        <img src={planb} alt="" />
                    </div>
                    <div className={css.items_text}>
                        <h4>Plan B One-Step</h4>
                        <p>Emergency Contraceptive</p>
                    </div>
                </div>
                </Link>
                <Link to='/PharmaPlan/medicine'>
                <div className={css.item_card}>
                    <div className={css.items_img_container}>
                        <img src={panadol} alt="" />
                    </div>
                    <div className={css.items_text}>
                        <h4>Mylanta</h4>
                        <p>Emergency Contraceptive</p>
                    </div>
                </div>
                </Link>
                <Link to='/PharmaPlan/medicine'>
                <div className={css.item_card}>
                    <div className={css.items_img_container}>
                        <img src={tremenza} alt="" />
                    </div>
                    <div className={css.items_text}>
                        <h4>Tremenza</h4>
                        <p>Syrup and Tablet</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}