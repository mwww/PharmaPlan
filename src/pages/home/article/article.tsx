import css from './.module.scss';
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <div className={css.article_wrapper}>
            <h1>Recommended</h1>
            <div className={css.articles}>
                <Link to="/PharmaPlan/article">
                <div className={css.article_card}>
                    <img src="./assets/Home/Tzield.png" alt="" />
                    <div className={css.article_text}>
                        <p>Smelly Wibu Nerdy Writer</p>
                        <h4>Tzield, new breakthrough medicine for Type-1 Diabetes</h4>
                    </div>
                </div>
                </Link>
                <Link to="/PharmaPlan/article">
                <div className={css.article_card}>
                    <img src="./assets/Home/Smoke.png" alt="" />
                    <div className={css.article_text}>
                        <p>Smelly Wibu Nerdy Writer</p>
                        <h4>Tzield, new breakthrough medicine for Type-1 Diabetes</h4>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}