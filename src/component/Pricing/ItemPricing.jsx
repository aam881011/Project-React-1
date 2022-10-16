import React from "react";
import "./Pricing.scss";

const ItemPricing = (props) => {
  return (
    <div className="boxPrice">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <h3>{props.price}</h3>
      {props.btn}
    </div>
  );
};
  
export default ItemPricing;
