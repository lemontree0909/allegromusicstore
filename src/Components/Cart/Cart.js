

import { useSelector } from 'react-redux';
import icon_cart from '../../picture/icons/icon_cart.png';
import { getTotalQuantity } from '../../redux/cartSlice';
import { useState } from 'react';
import '../../App.css';
import EmptyCart from './EmptyCart';
import FullCart from './FullCart';

const Cart = () => {
    const quantity = useSelector(getTotalQuantity);
    const [isActive, setIsActive] = useState(false);

const checkCartnotEmpty = () => {
    if (quantity === 0) {
        return (
            <EmptyCart emptyCart={isActive}/>
    ) 
    } else {
    return (
        <FullCart fullCart={isActive}/>
    )
}
}


return(
    <div>
        <div className="cart-btn">
            <button onClick={() => setIsActive(!isActive)} className='cart-icon'>
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