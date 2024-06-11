import style from "./footer.module.scss";
// import lg from "./LG_PharmaPlan.png";

// import SearchBar from "./searchBar/searchBar";

export default function Footer() {
  return (
    <div className={style.footers}>
      <div className={style.leftfooter}>
        <h1>PharmaPlan</h1>
      </div>
      <div className={style.rightfooter}>
        <div className={style.column}>
          <h3>Info</h3>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
        <div className={style.column}>
          <h3>Social Media</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit</a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </div>
  );
}
