import css from './.module.scss';
import { Link } from "react-router-dom";
import tzield from "./Tzield.png";
import smoking from "./Smoke.png";
export default function Hero() {
    return (
        <div className={css.article_wrapper}>
            <h1>Recommended</h1>
            <div className={css.articles}>
                <Link to="/article">
                <div className={css.article_card}>
                    <img src={tzield} alt="" />
                    <div className={css.article_text}>
                        <p>Smelly Wibu Nerdy Writer</p>
                        <h4>Tzield, new breakthrough medicine for Type-1 Diabetes</h4>
                    </div>
                </div>
                </Link>
                <Link to="/article">
                <div className={css.article_card}>
                    <img src={smoking} alt="" />
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