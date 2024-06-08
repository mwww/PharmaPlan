import style from "./navbar.module.scss"
import lg from "./LG_PharmaPlan.png"

// import SearchBar from "./searchBar/searchBar"

import searchIco from '../../assets/search.png'
import InputBar from "../inputBar/inputBar";
import { Link } from "react-router-dom";

interface NavBarProps {
  isSpacer? : boolean;
  isLoggedIn?: boolean;
}

export default function Navbar({isSpacer, isLoggedIn}: NavBarProps) {
      const navbarLinks = [
        {
          name: "Home",
          link: "/PharmaPlan/"
        },
        {
          name: "Article",
          link: "/PharmaPlan/article"
        },
        {
          name: "Medicine",
          link: "/PharmaPlan/medicine"
        },
        {
          name: "Planner",
          link: "/PharmaPlan/planner"
        },
      ]

    // console.log(`${!!isSpacer}`)

    // isSpacer = isSpacer ? true : false;

    // `${style.main} ${isSpacer && style.isSpacer} el`

    return (
      <nav className={`${style.main} ${isSpacer && style.isSpacer} el`}>
        <div>
          <Link to="/PharmaPlan/" style={{ textDecoration: 'none' }} >
            <img src={lg} alt="" />
            <h1>PharmaPlan</h1>
          </Link>
          <div className="nav_right">
          <ul>
            {navbarLinks.map((l, index) => (
              <li key={index}>
                <Link to={l.link}>{l.name}</Link>
              </li>
            ))}
          </ul>
            <div className={style.sep}></div>
            {/* <SearchBar/> */}
            <div className={style.cta}>
            <InputBar placeholder="Find Medicine" leftIcon={searchIco} />
            {/* Conditionally render login button based on authentication state */}
            {!isLoggedIn ? (
              <Link to="/PharmaPlan/login">
                <button className={style.btn_login}>Login</button>
              </Link>
            ):
            <div className={style.profile_pic}> </div>}
            </div>
          </div>
        </div>
      </nav>
    )
}