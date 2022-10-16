import "./Projects.scss";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container">
      <div className="head-project">
        <h2>Our Latest Projects</h2>
        <p>
          When unknow printer took a gallery of type and scramblted it to makea{" "}
          <br /> type specimen book
        </p>
      </div>
      <div className="navProject">
        <NavLink to="/">DEVELOPMENT</NavLink>
        <NavLink to="/MainProjects2">WEB DESIGN</NavLink>
        <NavLink to="/MainProjects1">APPS DEVELOPMENT</NavLink>
        <NavLink to="/MainProjects2">MARKETING</NavLink>
      </div>
    </div>
  );
};

export default Projects;
