import css from './.module.scss';
import { Link } from "react-router-dom";

export default function ArticleList() {
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
        <div className={css.wrapper}>
            {articleData.map(article => (
                <Link to="/article" className={css.card}>
                    <div className={css.bg} style={{ backgroundImage: `url(${article.imgPath})` }}></div>
                    <div>
                        <p>{article.author}</p>
                        <h2>{article.title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque accusantium nostrum voluptate minima distinctio perspiciatis officia voluptatibus neque omnis pariatur a est, incidunt dolore mollitia ad ab impedit dignissimos?
                        Est nostrum voluptas, alias laudantium vero voluptatum sint repellendus quidem consectetur, non, modi nisi libero esse similique commodi nihil sequi accusantium perspiciatis mollitia odio atque! Blanditiis tempora eius dolor excepturi.
                        Odio fuga, tenetur saepe dolore voluptatibus, reiciendis dolores quisquam ab quas maxime sit modi suscipit molestias rerum, ipsam sint incidunt culpa beatae dolorem unde iusto ipsa? Deleniti veniam iste quaerat.</p>
                    </div>
                </Link>
            ))}
            <div className={css.easter}>
                I Wish You Love &lt;3
            </div>
        </div>
    )
}