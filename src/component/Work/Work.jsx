import "./Work.scss";
import amosh from "./../../assets/About/amosh.png";
import ico from "./../../assets/About/ico.png";
import kas from "./../../assets/About/kas.png";
import not from "./../../assets/About/not.png";

const Work = () => {
  return (
    <section className="container">
      <div className="work">
        <div className="textWork">
          <h2>
            Over 500+ Completed work & Still Counting
          </h2>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Phasellus at orci non risus luctus commodo.
            Ut nibh tellus, faucibus nec gravida.
          </p>
          <p>
            Duis quis ipsum leo. Praesent vitae tellus ac ante porta mattis vel
            non ex. Quisque a finibus justo.
          </p>
        </div>
        <div className="circlesWork">
          <div className="circl">
            <div className="circle1">
              <img src={not} alt="logo" />
              <h3>300+</h3>
              <p>Projects Done</p>
            </div>
            <div className="circle2">
              <img src={amosh} alt="logo" />
              <h3>250+</h3>
              <p>Projects Done</p>
            </div>
          </div>
          <div className="circl">
            <div className="circle3">
              <img src={ico} alt="logo" />
              <h3>200+</h3>
              <p>Active Projects</p>
            </div>
            <div className="circle4">
              <img src={kas} alt="logo" />
              <h3>5+</h3>
              <p>Years Exerience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
