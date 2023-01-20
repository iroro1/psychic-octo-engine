import React, { useState } from "react";
import profpic from "../assets/img/profpic.jpeg";
import Courses from "../components/Courses";
import IconsSocial from "../components/IconsSocial";
import PlayProjects from "../components/PlayProjects";
import Projects from "../components/Projects";
import TabbedDisplay from "../components/TabbedDisplay";
import TechTools from "../components/TechTools";
import cv from "../assets/cv.pdf";
import "./Home.css";
import DetailsModal from "../components/DetailsModal";
import { ClickAwayListener } from "@mui/material";
import { CloseCircle } from "iconsax-react";

const Home = () => {
  const projectData = {
    js: {
      link: "https://jously.com/",
      title: "Jously",
      desc: "",
      snapshots: [""],
    },
    ps: {
      link: "https://playshaka.online/home",
      title: "Playshaka",
      desc: "",
      snapshots: [""],
    },
    et: {
      link: "https://etiaba.com/",
      title: "Etiaba",
      desc: "lldkjksdnjcndncjkd kdjhcjkadsc dcdhlcjkbdshkc dhbckajbdhjks adbljsankcjs bchabshcladsk shdsabhk jshkjadshgbjasbfhjbjfbabjjasbb sa jdvasgvdghd",
      snapshots: [""],
    },
    im: {
      link: "https://iroro1.github.io/lionK.com/imageFilter/index.html",
      title: "Image App",
      desc: "",
      snapshots: [""],
    },
    dm: {
      link: "https://iroro1.github.io/lionK.com/DrumMachine/index.html",
      title: "Drum Machine",
      desc: "",
      snapshots: [""],
    },
    bg: {
      link: "https://iroro1.netlify.app/projects/backgroundgen(dom%20manipulation%202)/",
      title: "Background Gradient",
      desc: "",
      snapshots: [""],
    },
    do: {
      link: "https://fdo.netlify.app/login?redirect=%2F",
      title: "Debt Office",
      desc: "",
      snapshots: [""],
    },
    cm: {
      link: "https://contactman.netlify.app/",
      title: "Contact manager",
      desc: "",
      snapshots: [""],
    },
    po: {
      link: "https://visionary-unicorn-01cd18.netlify.app/",
      title: "Portfolio 2023",
      desc: "",
      snapshots: [""],
    },
    cs: {
      link: "https://coursera.org/share/536d168deef2387ebf2813816258e82a",
      title: "Cybersecurity: Developing a Program for Your Business",
      desc: "",
      snapshots: [""],
    },
    jp: {
      link: "https://coursera.org/share/105977e0f0daf38da6e168ccdd4744ff",
      title: "Java Programming and Software Engineering Fundamentals",
      desc: "",
      snapshots: [""],
    },
    fr: {
      link: "https://coursera.org/share/00585f5957434e25226740814677c09e",
      title: "Full-Stack Web Development with React",
      desc: "",
      snapshots: [""],
    },
    pe: {
      link: "https://coursera.org/share/e8d93dbdee04c20321f85f82a55f1e1b",
      title: "Python for Everybody",
      desc: "",
      snapshots: [""],
    },
  };
  const social = {
    credly: "https://www.credly.com/users/leo-ojigbo",
    email: "mailto:@ojigboleo@gmail.com",
    gitHub: "https://github.com/iroro1",
    linkedIn: "https://www.linkedin.com/in/iroro1/",
  };

  const [showModal, setShowModal] = useState("");

  const clickFn = (name) => {
    setShowModal(name);
  };
  return (
    <div>
      {showModal && (
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: "2",
            background: "rgba(0, 0, 0, 0.4)",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ClickAwayListener onClickAway={() => setShowModal("")}>
            <div
              style={{
                width: "90%",
                maxWidth: "1057px",
                borderRadius: "56px",
                height: "90vh",
                background: "#fff",
                position: "relative",
                padding: "24px",
              }}
            >
              <div className="flex ">
                <span onClick={()=>setShowModal("")} className="animate-pulse ml-auto cursor-pointer">
                  <CloseCircle variant="Bold" color="#A63A5A" size={27} />
                </span>
              </div>
              <DetailsModal data={projectData[showModal]} />
            </div>
          </ClickAwayListener>
        </div>
      )}
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
              <IconsSocial name={"Cv"} link={cv} />
              <IconsSocial name={"Credly"} link={social.credly} />
              <IconsSocial name={"LinkedIn"} link={social.linkedIn} />
              <IconsSocial name={"Github"} link={social.gitHub} />
              <IconsSocial name={"Gmail"} link={social.email} />
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
                  Component: <TechTools />,
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
                  Component: <Projects onClickFn={clickFn} />,
                },
                {
                  title: "Play Projects",
                  Component: <PlayProjects onClickFn={clickFn} />,
                },
                {
                  title: "Courses",
                  Component: <Courses onClickFn={clickFn} />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
