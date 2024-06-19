import css from "./.module.scss";
// import lg from "./LG_PharmaPlan.png";

// import SearchBar from "./searchBar/searchBar";

export default function Footer2() {
    return (
        <footer className={`el ${css.footer}`}>
            <div>
                <div className={css.leftfooter}>
                    <h1>PharmaPlan</h1>
                </div>
                <div className={css.v_dvdr}></div>
                <div className={css.rightfooter}>
                    <div>
                        <h3>Info</h3>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms and Conditions</a>
                    </div>
                    <div className={css.v_dvdr}></div>
                    <div>
                        <h3>Social Media</h3>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit</a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
