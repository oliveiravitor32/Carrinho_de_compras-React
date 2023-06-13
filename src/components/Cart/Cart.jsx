import React, { useContext} from "react";

import "./Cart.css"
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

import CartItem from "../CartItem/CartItem";

function Cart() {
  
  const { cartItems, isCartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)

  return (
    <section className={`cart ${isCartVisible ? 'cart--active': ""}`}>
       <div className="cart-items">
        { cartItems.map( (cartItem, index) => <CartItem key={index} data={cartItem} index={index} />)}
      </div>

      
    <div className="cart-resume">{formatCurrency(totalPrice, "BRL")}</div>

    </section>
  )
}

export default Cart;