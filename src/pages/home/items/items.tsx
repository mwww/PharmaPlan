import css from './.module.scss';
import { Link } from "react-router-dom";

import _card from './card/card';

export default function Hero() {
    const medList = [
        {
            imgPath: "./assets/Obat/Planb.png",
            title: "Plan B One-Step",
            desc: "Emergency Contraceptive"
        },
        {
            imgPath: "./assets/Obat/Panadol.png",
            title: "Panadol",
            desc: "Pain Reliever"
        },
        {
            imgPath: "./assets/Obat/Tremenza.png",
            title: "Tremenza",
            desc: "Syrup and Tablet"
        },
    ]
    return (
        <div className={css.items_container}>
            <h1>Trace back to your last bought Items</h1>
            
            <div className={css.items}>
                {/* <Link to='/medicine' className={css.wrapper}>
                 <_card imgPath='./assets/Obat/Planb.png' title='Plan B One-Step' desc='Emergency Contraceptive'/>
                </Link>
                <Link to='/medicine' className={css.wrapper}>
                 <_card imgPath='./assets/Obat/Planb.png' title='Plan B One-Step' desc='Emergency Contraceptive'/>
                </Link>
                <Link to='/medicine' className={css.wrapper}>
                 <_card imgPath='./assets/Obat/Planb.png' title='Plan B One-Step' desc='Emergency Contraceptive'/>
                </Link> */}

                {medList.map(med => (
                    <Link to='/medicine' className={css.wrapper}>
                    <_card imgPath={med.imgPath} title={med.title} desc={med.desc}/>
                    </Link>
                ))}
                {/* <Link to='/medicine'>
                <div className={css.item_card}>
                    <div className={css.items_img_container}>
                        <img src="./assets/Obat/Planb.png" alt="Plan B One-Step" />
                    </div>
                    <div className={css.items_text}>
                        <h4>Plan B One-Step</h4>
                        <p>Emergency Contraceptive</p>
                    </div>
                </div>
                </Link>
                <Link to='/medicine'>
                <div className={css.item_card}>
                    <div className={css.items_img_container}>
                        <img src="./assets/Obat/Panadol.png" alt="Mylanta" />
                    </div>
                    <div className={css.items_text}>
                        <h4>Panadol</h4>
                        <p>Pain Reliever</p>
                    </div>
                </div>
                </Link>
                <Link to='/medicine'>
                <div className={css.item_card}>
                    <div className={css.items_img_container}>
                        <img src="./assets/Obat/Tremenza.png" alt="Tremenza" />
                    </div>
                    <div className={css.items_text}>
                        <h4>Tremenza</h4>
                        <p>Syrup and Tablet</p>
                    </div>
                </div>
                </Link> */}
            </div>
        </div>
    )
}