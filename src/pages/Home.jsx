import React from "react";
import profpic from "../assets/img/profpic.jpeg";
import Courses from "../components/Courses";
import IconsSocial from "../components/IconsSocial";
import PlayProjects from "../components/PlayProjects";
import Projects from "../components/Projects";
import TabbedDisplay from "../components/TabbedDisplay";
import TechTools from "../components/TechTools";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="top">
        <div className="top-left">
          <div className="cont">
            <div className="static">
              <div>
                <img id="img" src={profpic} alt="Profile" />
              </div>
            </div>
            <div className="box2"></div>
          </div>
          <div className="social">
            <IconsSocial name={"Cv"} />
            <IconsSocial name={"Credly"} />
            <IconsSocial name={"LinkedIn"} />
            <IconsSocial name={"Github"} />
            <IconsSocial name={"Gmail"} />
          </div>
        </div>

        <div className="top-right">
          <h2>
            <span>Leo</span> OJIGBO
          </h2>
          <h1>Software Engineer</h1>
        </div>
      </div>

      {/* Buttom Row */}
      <div className="buttom">
        {/* LHS */}
        <div className="buttom-left">
          <TabbedDisplay
            dataArray={[
              {
                title: "Tech Tools",
                Component: TechTools,
              },
            ]}
          />
        </div>
        {/* RHS */}
        <div className="buttom-right">
          <TabbedDisplay
            dataArray={[
              {
                title: "Projects",
                Component: Projects,
              },
              {
                title: "Play Projects",
                Component: PlayProjects,
              },
              {
                title: "Courses",
                Component: Courses,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
