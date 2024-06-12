// src/ProfileDropdown.js

import { useState } from 'react';
import css from './.module.scss';
// import { log } from 'console';
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log("test");
    
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    window.location.reload();
  }

  return (
    <>
    <div className={css.profile_dropdown}>
        <div className={css.profile_pic} onClick={handleToggle}></div> 
      {isOpen && (
        <div className={css.dropdown_menu}>
            <div>
                <div className={css.profile_card}>
                    <div className={css.profile_card_pic}></div>
                    <h1>Owen Siau</h1>
                    <p>id: 2702326151</p>
                </div>
            </div>
          <ul>
            <Link to="/PharmaPlan/profile"><li><a>View Profile</a></li></Link>
            <li><a>Settings</a></li>
            <li><a onClick={onLogout}>Logout</a></li>
          </ul>
        </div>
      )}
    </div>
    </>

  );
};

export default ProfileDropdown;
