import React from "react";
import Data from "./../../Data";
import ItemSer from "./ItemSer";
import "./Service.scss";

const Service = () => {
  const items = Data.map((item) => {
    return <ItemSer img={item.img} title={item.title} text={item.text} />;
  });
  return (
    <section className="services">
      <div className="container">
        <div>
          <h2>Our Service</h2>
          <p>
            When unknow printer took a gallery of type and scramblted
            <br />
            it to makea type specimen book
          </p>
        </div>
        <div className="boxesServ">{items}</div>
      </div>
    </section>
  );
};

export default Service;
