import "./MainProjects1.scss";
import project2 from "./../../../assets/Projects/project2.jpg";
// import project1 from './../../../assets/Projects/project1.jpg';
// import project3 from './../../../assets/Projects/project3';

const MainProjects2 = () => {
  return (
    <section className="container">
      <section className="berantProjects">
        <section className="project1 ">
          <img src={project2} alt="logo" />
          <h3>Design & Develop</h3>
          <p>Design</p>
        </section>
        <section className="project1 ">
          <img src={project2} alt="logo" />
          <h3>Design & Develop</h3>
          <p>Design</p>
        </section>
        <section className="project1 ">
          <img src={project2} alt="logo" />
          <h3>Design & Develop</h3>
          <p>Design</p>
        </section>
      </section>
    </section>
  );
};

export default MainProjects2;
