// src/ProfileDropdown.js

import { useState } from 'react';
import css from './.module.scss';
// import { log } from 'console';

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
                    <h1>User</h1>
                    <p>id: 2702329664</p>
                </div>
            </div>
          <ul>
            <li><a href="#">View Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a onClick={onLogout}>Logout</a></li>
          </ul>
        </div>
      )}
    </div>
    </>

  );
};

export default ProfileDropdown;
