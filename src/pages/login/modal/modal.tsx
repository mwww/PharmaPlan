import React from 'react';
import css from './.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div className={css.modalOverlay}>
            <div className={css.modalContent}>
                <h3>{message}</h3>
                <button onClick={onClose} className={css.closeButton}>Close</button>
            </div>
        </div>
    );
};

export default Modal;