import css from "./.module.scss";
import setTitle from "../../helper/title/title";

export default function Profile() {
  setTitle("Profile");

  return (
    <div className={css.cont}>
      <div className={css.profile_header}>
        <div className={css.profile_pic}></div>
        <h1 className={css.profile_name}>John Doe</h1>
        <p className={css.profile_bio}>Web Developer</p>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={css.profile_content}>
        
      </div>
    </div>
  );
}
