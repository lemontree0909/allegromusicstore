import { useSelector } from 'react-redux';
import icon_cart from '../../picture/icons/icon_cart.png';
import { getCartItems, getTotalPrice, getTotalQuantity } from '../../redux/cartSlice';
import CartItem from './CartItem';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../App.css';


import {
    Link
  } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalQuantity);
    const [isActive, setIsActive] = useState(false);
    const { t } = useTranslation();


const checkCartnotEmpty = () => {
    if (quantity === 0) {
        return (
            <div className={isActive ? 'cart-items' : 'cart-items hide'}>
                <h5>{t("YOUR CART IS EMPTY")}</h5>

                <Link to='/' className="">
                    <h5 className="">{t("START SHOPPING")}</h5>
                </Link>
        
            </div>
            
        ) 
    } else {
    return (
        <div className={isActive ? 'cart-items' : 'cart-items hide'}>
            {cartItems.map((cartItem, id) => <CartItem cartItem={cartItem} key={id}/>)}
            <h3 className='item-total'>{t("TOTAL")}: ${totalPrice.toFixed(0)}</h3>
        </div>

    )
}
}

const onCartHide = (event) => {
// 👇️ toggle isActive state on click
    setIsActive(current => !current);
} 

return(
    <div>
        <div className="cart-btn">
            <button onClick={onCartHide} className='cart-icon'>
                <img className='cartIcon' src={icon_cart} alt="icon"/>
            </button>
            <p className='item-count'>({quantity})</p>
        </div>
        
        <div className='cart-dropdown-container'>
            {checkCartnotEmpty()}
        </div>
    </div>
)

}

export default Cart;