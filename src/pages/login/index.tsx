import { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';

import setTitle from "../../helper/title/title";
import css from './.module.scss';
import next from './next.png';
import Modal from './modal/modal';

interface LoginProps {
    onLogin: () => void; 
}

export default function Login({ onLogin }: LoginProps) {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [debouncedEmail, setDebouncedEmail] = useState<string>(email);
    
    setTitle("Login");

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedEmail(email);
        }, 300); // 500ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [email]);

    useEffect(() => {
        if (debouncedEmail) {
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            if (!emailPattern.test(debouncedEmail)) {
                setEmailError('Please enter a valid email address');
            } else {
                setEmailError('');
            }
        } else {
            setEmailError('');
        }
    }, [debouncedEmail]);

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
        if (!emailError && email) {
            console.log("Submitted email:", email);
            setIsModalOpen(true);
            onLogin();
        } else {
            setEmailError('Please enter a valid email address');
        }
    };

    const handleProviderLogin = (provider: string) => {
        console.log(`Logging in with ${provider}`);
        setIsModalOpen(true);
        onLogin();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        window.history.pushState(null, '', '/');
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
                {emailError && <p className={css.error}>{emailError}</p>}
                <img src={next} alt="" onClick={handleSubmit} style={{ 
                        cursor: emailError ? 'not-allowed' : 'pointer', 
                        opacity: emailError ? 0.5 : 1 
                    }}  />
                <p>Or use one of the following providers</p>
                <div className={css.icons}>
                    <img 
                        src="./assets/Login/icons/Google.png" 
                        alt="Google" 
                        width="25" 
                        onClick={() => handleProviderLogin('Google')} 
                    />
                    <img 
                        src="./assets/Login/icons/Meta.png" 
                        alt="Meta" 
                        width="25" 
                        onClick={() => handleProviderLogin('Meta')} 
                    />
                    <img 
                        src="./assets/Login/icons/Microsoft.png" 
                        alt="Microsoft" 
                        width="25" 
                        onClick={() => handleProviderLogin('Microsoft')} 
                    />
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
