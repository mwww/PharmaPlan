import { useEffect } from 'react';
import css from './.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const Modal = ({ isOpen, onClose, message }: ModalProps) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);
  
    if (!isOpen) {
      return null;
    }
    
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