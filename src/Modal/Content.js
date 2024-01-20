import close from '../picture/icons/close.png';
import { useTranslation } from "react-i18next";
import './Style.css';

const Content = ( { setIsOpen } ) => {
    const { t } = useTranslation();

    return (
        <div className='modal_content'>
            <button className='close-btn' onClick={ () => setIsOpen(false) }>
                <img className='close-img' src={close} alt='close'/>
            </button>
            <p className='modal-text'>{t("Thank you for choosing our market! Here must be form for payment, but it's not a real shop")}</p>

        </div>)
}

export default Content;