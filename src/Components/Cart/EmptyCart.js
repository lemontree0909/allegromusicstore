import { useTranslation } from "react-i18next";
import '../../App.css';
import {
    Link
  } from "react-router-dom";


const EmptyCart = ({emptyCart}) => {
    const { t } = useTranslation();

    return(

            <div className={emptyCart ? 'cart-items' : 'cart-items hide'}>
                <h4 className='empty-cart'>{t("YOUR CART IS EMPTY")}</h4>

                <Link to='/'>
                    <h5 className="empty-cart">{t("START SHOPPING")}</h5>
                </Link>
        
            </div>
            )
}
export default EmptyCart;