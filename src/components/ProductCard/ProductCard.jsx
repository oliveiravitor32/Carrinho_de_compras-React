import React, { useContext } from "react";
import {BsFillCartPlusFill} from "react-icons/bs"
import formatCurrency from "../../utils/formatCurrency";

import "./ProductCard.css"
import AppContext from "../../context/AppContext";

function ProductCard({data}) {
  
  const { title, thumbnail, price} = data;

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCartItem = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      <img src={
        thumbnail.replace(/\w\.jpg/gi, "W.jpg") //regex
      
      } alt="product" className="card-image"/>

      <div className="product-infos">
          <h2 className="product-price">{formatCurrency(price, "BRL")}</h2>
          <h2 className="product-title">{title}</h2>
      </div>


      <button type="button" className="button-add-cart" onClick={handleAddCartItem}>
        <BsFillCartPlusFill/>
      </button>
    </section>
  );
}

export default ProductCard;