import React from "react";
import DataPrice from "./../../DataPrice";
import ItemPricing from "./ItemPricing";
import "./Pricing.scss";

const Pricing = () => {
  const items = DataPrice.map((item) => {
    return (
      <ItemPricing
        img={item.img}
        title={item.title}
        text={item.text}
        price={item.price}
        btn={item.btn}
      />
    );
  });

  return (
    <section className="container">
      <section className="pricing">
        <section className="headPrice">
          <h2>Afforable Pricing</h2>
          <p>
            When unknow printer took a gallery of type and scramblted it to make
            a <br /> type specimen book
          </p>
        </section>
        <div className="boxesPrice">{items}</div>
      </section>
    </section>
  );
};
  
export default Pricing;
