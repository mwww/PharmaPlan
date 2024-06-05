import style from "./navbar.module.scss"
import lg from "./LG_PharmaPlan.png"

// import SearchBar from "./searchBar/searchBar"

import searchIco from '../../assets/search.png'

import InputBar from "../inputBar/inputBar";
import { Link } from "react-router-dom";

interface NavBarProps {
  isSpacer? : boolean;
}

export default function Navbar({isSpacer}: NavBarProps) {
    const navbarLinks = [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Article",
        link: "/article"
      },
      {
        name: "Medicine",
        link: "/medicine"
      },
      {
        name: "Planner",
        link: "/planner"
      },
    ]

    // console.log(`${!!isSpacer}`)

    // isSpacer = isSpacer ? true : false;

    // `${style.main} ${isSpacer && style.isSpacer} el`

    return (
      <nav className={`${style.main} ${isSpacer && style.isSpacer} el`}>
        <div>
          <a href="/" >
            <img src={lg} alt="" />
            <h1>PharmaPlan</h1>
          </a>
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
              <a href="/login">
                <button className={style.btn_login}>Login</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}