import "./ContactUs.scss";
import img from "./../../assets/contactus.png";

const ContactUs = () => {
  return (
    <section className="container">
      <div className="contactUs">
        <div>
          <img src={img} alt="" />
        </div>
        <section className="rightContact">
          <section className="head">
            <h2>
              Get In Touch With <br /> Us
            </h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              make a type specimen book
            </p>
          </section>
          <section className="inputs">
            <div className="input1">
              <input type="text" placeholder="FIRST NAME" />
              <input type="text" placeholder="LAST NAME" />
            </div>
            <div className="input1 input2">
              <input type="email" name="" id="" placeholder="EMAIL Address " />
              <input type="number" name="" id="" placeholder="Phone No" />
            </div>
          </section>
          <div className="area">
            <textarea placeholder="Massage " />
          </div>
          <button>Submit Now</button>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;
