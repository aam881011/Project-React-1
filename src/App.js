import Navbar1 from "./component/Nav/Navbar";
import "./App.scss";
import Header from "./component/Header/Header";
import Service from "./component/Service/Service";
import About from "./component/About/About";
// import Test from './Test';
import { Route, Routes } from "react-router-dom";
import MainProjects1 from "./component/Projects/MainProjects/MainProjects1";
import MainProjects2 from "./component/Projects/MainProjects/MainProjects2";
import Pricing from "./component/Pricing/Pricing";
import Slider from "./component/Slider/Slider";
import ContactUs from "./component/ContactUs/ContactUs";
import Footer from "./component/Footer/Footer";
import Work from "./component/Work/Work";
import Projects from "./component/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Header />
      <Service />
      <About />
      <Work />
      <Projects />
      <Routes>
        <Route path="/" element={<MainProjects1 />} />
        <Route path="/MainProjects2" element={<MainProjects2 />} />
        <Route path="/MainProjects1" element={<MainProjects1 />} />
        <Route path="/MainProjects2" element={<MainProjects2 />} />
      </Routes>
      <Pricing />
      <Slider />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
