import css from './.module.scss';
import { Link } from "react-router-dom";

export default function Hero() {
    const articleData = [
        {
            imgPath: "./assets/Home/Tzield.png",
            author: "Smelly Nerdy Wibu Writer",
            title: "Tzield, new breakthrough medicine for Type-1 Diabetes",
        },
        {
            imgPath: "./assets/Home/Smoke.png",
            author: "Captain Obvious",
            title: "Smoking is bad for your health, study says",
        },
        {
            imgPath: "./assets/rot_in_bed.jpg",
            author: "Professional Yapper",
            title: "\"No rot in bed. Rot in bed no good.\" Them nerd be nerdin",
        }
    ]
    return (
        <div className={css.article_wrapper}>
            <h1>Recommended</h1>
            <div className={css.articles}>
                {articleData.map(article => (
                    <Link to="/article" className={css.article_card}>
                        {/* <img src={article.imgPath} alt="" /> */}
                        {/* <div className={css.bg} style={`background-img: url(${article.imgPath})`}></div> */}
                        <div className={css.bg} style={{ backgroundImage: `url(${article.imgPath})` }}></div>
                        <div className={css.article_text}>
                            <p>{article.author}</p>
                            <h4>{article.title}</h4>
                        </div>
                    </Link>
                ))}
                {/* <Link to="/article">
                <div className={css.article_card}>
                    <img src="./assets/Home/Tzield.png" alt="" />
                    <div className={css.article_text}>
                        <p>Smelly Wibu Nerdy Writer</p>
                        <h4>Tzield, new breakthrough medicine for Type-1 Diabetes</h4>
                    </div>
                </div>
                </Link>
                <Link to="/article">
                <div className={css.article_card}>
                    <img src="./assets/Home/Smoke.png" alt="" />
                    <div className={css.article_text}>
                        <p>Captain Obvious</p>
                        <h4>Smoking is bad for your health, study says</h4>
                    </div>
                </div>
                </Link>
                <Link to="/article">
                <div className={css.article_card}>
                    <img src="./assets/Home/Smoke.png" alt="" />
                    <div className={css.img}></div>
                    <div className={css.article_text}>
                        <p>Professional Yapper</p>
                        <h4>"No rot in bed. Rot in bed is no good." <br />Research said🤓.</h4>
                    </div>
                </div>
                </Link> */}
            </div>
        </div>
    )
}