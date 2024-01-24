import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../App.css';
import Content from '../Modal/Content';
import Modal from '../Modal/Modal';

const FullCart = ({fullCart}) => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();


    return(

        <div className={fullCart ? 'cart-items' : 'cart-items hide'}>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem}/>)}

            <hr/>

            <div className='container-buy'>
                <h3 className='item-total'>{t("TOTAL")}: ${totalPrice.toFixed(0)}</h3>

                <button onClick={ () => setIsOpen(true) } className='btn-buy'>{t("BUY")}</button>
                
                {isOpen && 
                <Modal setIsOpen={setIsOpen}>
                <Content setIsOpen={setIsOpen}/>
                </Modal>
                }

            </div>
        </div>
        )

}


export default FullCart;