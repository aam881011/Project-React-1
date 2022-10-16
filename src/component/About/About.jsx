import "./About.scss";
import img from "./../../assets/About/about.png";

const About = () => {
  return (
    <section className="container">
      <div className="about">
        <img src={img} alt="img" />
        <div className="aboutCont">
          <h2>Why You Hire Us?</h2>
          <p>
            Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna.
            Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit
            amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
          </p>
          <p>
            Suspendisse potenti. Aliquam elementum felis purus, quis vulputate
            libero semper nec. Morbi tincidunt maximus nisl vel placerat.
            Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec
            metus eu est laoreet hendrerit vitae non ipsum. Nam faucibus
            elementum arcu, eget eleifend tortor.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default About;
