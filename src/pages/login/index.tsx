import { useState, ChangeEvent, KeyboardEvent } from 'react';

import setTitle from "../../helper/title/title";
import css from './.module.scss';
import google from './icons/Google.png';
import meta from './icons/Meta.png';
import microsoft from './icons/Microsoft.png';
import next from './next.png';
import Modal from './modal/modal';

interface LoginProps {
    onLogin: () => void; 
  }

export default function Login({onLogin} : LoginProps) {
    const [email, setEmail] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    setTitle("Login");

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (isModalOpen) {
                closeModal();
            } else {
                handleSubmit();
            }
        }
    };

    const handleSubmit = () => {
        console.log("Submitted email:", email);
        setIsModalOpen(true);
        onLogin();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        window.history.pushState(null, '', '/PharmaPlan/');
        window.dispatchEvent(new PopStateEvent('popstate'));
    };

    return (
        <div className={css.const}>
            <div className={css.top}>
                <h3>Welcome to PharmaPlan</h3>
                <p>Your all-in-one health solution.</p>
            </div>

            <div className={css.bottom}>
                <p>Please enter your email address to continue</p>
                <input
                    type="email"
                    placeholder="sebas@pharmaplan.com"
                    value={email}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    required
                />
                <img src={next} alt="" onClick={handleSubmit} style={{ cursor: 'pointer' }} />
                <p>Or use one of the following provider</p>
                <div className={css.icons}>
                    <img src={google} alt="Google" width="25" />
                    <img src={meta} alt="Meta" width="25" />
                    <img src={microsoft} alt="Microsoft" width="25" />
                </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                message="You have successfully signed in" 
            />
        </div>
    );
}

