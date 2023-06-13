import React, { useContext } from "react";
import {BsFillCartDashFill} from "react-icons/bs"

import "./CartItem.css"
import formatCurrency from "../../utils/formatCurrency"
import AppContext from "../../context/AppContext";

function CartItem({data, index}) {

  const {title, thumbnail, price} = data;

  const {cartItems, setCartItems} = useContext(AppContext)
 
  const handleRemoveCartItem = () => {
    const updatedItems = []

    for (let i = 0; i < cartItems.length; i++) {
      if (i !== index) {
          updatedItems.push(cartItems[i]);
      }
    }

    setCartItems(updatedItems)
 
  }

  return (
    <section className="cart-item">
        <img src={thumbnail} alt=""  className="cart-item-image"/>


        <div className="cart-item-content">
          <h3 className="cart-item-title">{title}</h3>
          <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        </div>

        <button className="button-remove-cart" onClick={handleRemoveCartItem}>
          <BsFillCartDashFill/>
        </button>
    </section>
  )
}

export default CartItem;