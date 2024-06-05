import style from "./footer.module.scss"
// import lg from "./LG_PharmaPlan.png"

// import SearchBar from "./searchBar/searchBar"



export default function Footer() {
    // console.log(`${!!isSpacer}`)

    // isSpacer = isSpacer ? true : false;

    // `${style.main} ${isSpacer && style.isSpacer} el`

    return (
      <div className={style.footers}>
        <div className={style.leftfooter}>
          <h1>PharmaPlan</h1>
        </div>
        <div className={style.rightfooter}>
          <div className={style.column}>
            <h3>Info</h3>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
          <div className={style.column}>
            <h3>Social Media</h3>
            <p>Instagram</p>
            <p>Reddit</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    )
}