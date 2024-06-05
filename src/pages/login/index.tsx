// import setTitle from "../../helper/title/title"

import setTitle from "../../helper/title/title"
import css from './.module.scss'
import google from './icons/Google.png'; // Importing the folder
import meta from './icons/Meta.png';
import microsoft from './icons/Microsoft.png';
import next from './next.png';

export default function Login(){
    setTitle("Login");
    return (
        <div className={css.const}>
            <div className={css.top}>
                <h3>Welcome to PharmaPlan</h3>
                <p>Your all-in-one health solution.</p>
            </div>

            <div className={css.bottom}>
                <p>Please enter your email address to continue</p>
                <input type="email" placeholder="sebas@pharmaplan.com" />
                <img src={next} alt="" />
                <p>Or use one of the following provider</p>
                <div className={css.icons}>
                    <img src={google} alt="" width="25" />
                    <img src={meta} alt="" width="25" />
                    <img src={microsoft} alt="" width="25" />
                </div>
            </div>
        </div>
    );
}

