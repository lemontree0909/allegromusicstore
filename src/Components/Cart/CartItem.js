import { useDispatch } from "react-redux";
import dataInstruments from "../../data/dataInstruments";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useTranslation } from "react-i18next";
import '../../App.css';


const CartItem = ({cartItem}) => {
    console.log(cartItem)
    const { t } = useTranslation();
    const instruments = dataInstruments.find(item => item.id === cartItem.instrumentId);
    const dispatch = useDispatch();
    console.log(instruments);


    return(
        <div>
            <p>{t(instruments.name)}</p>
            
            <div className="order">
                <p>{cartItem.quantity} x ${instruments.price}</p>
                <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <img className="icon-trash" src="https://img.icons8.com/badges/48/trash.png" alt="trash"/>
                </span>
            </div>

        </div>

    )
}


export default CartItem;