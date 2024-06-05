import css from './.module.scss';

export default function Hero() {
    return (
        <div className={css.hero_container}>
            <div>
                <h3>Your all-in-one health solution.</h3>
                <p>PharmaPlan is a pioneering medical company at the forefront of healthcare innovation, dedicated to enhancing the well-being of individuals worldwide. With a legacy of excellence spanning over three decades, Pharmaplan is renowned for its unwavering commitment to quality, safety, and efficacy in every product and service it offers.</p>
                <a href="/medicine">
                    <button>Lihat Katalog Obat</button>
                </a>
            </div>
        </div>
    )
}