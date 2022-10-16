import banner1 from "../../assets/banner.png";
import "./Header.scss";

const Header = () => {
  return (
    <section className="wrap-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <h4>we are creative</h4>
              <h2>Deneb Agency</h2>
              <h5>We Are Professional Freelance Web Designer</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, iste.
              </p>
              <button>HIRE ME</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={banner1} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
