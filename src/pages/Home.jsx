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
      desc: "A web application that enables users send cards to thier loved. I led the frontend agile team to this delivery, with new features on the way",
      snapshots: [""],
    },
    ps: {
      link: "https://playshaka.online/home",
      title: "Playshaka",
      desc: "A web application that keeps users glued to their devices and entertained for hours. Streaming videos, audios and radios. Realtime access to news and steady feature increments. I led the frontend agile team to this delivery.",
      snapshots: [""],
    },
    et: {
      link: "https://etiaba.com/",
      title: "Etiaba",
      desc: "Etiaba is an all in one accounting software created to solve all accounting needs. It consist of a website, webapp and mobile app. I led the frontend team to delivering this project as part of a scrum team.",
      snapshots: [""],
    },
    im: {
      link: "https://iroro1.github.io/lionK.com/imageFilter/index.html",
      title: "Image App",
      desc: `
      This app is created using the Duke Learn to Program Js Library which adds a layer of abstraction to image processing.
      This course has increased my interest in image processing and i intend to make additional research in that field as soon as possible. My most interesting part is the Steganography part . The idea of Steganography is to hide data in images using simple Math. Utilising base 2 numbers or even decimals, you can hide images under other images or even text under images.
      `,
      snapshots: [""],
    },
    dm: {
      link: "https://iroro1.github.io/lionK.com/DrumMachine/index.html",
      title: "Drum Machine",
      desc: `
      This is a portfolio project made to mimic a music pad. Each key produces sounds and can fun to play with.`,
      snapshots: [""],
    },
    bg: {
      link: "https://iroro1.netlify.app/projects/backgroundgen(dom%20manipulation%202)/",
      title: "Background Gradient",
      desc: `
      This is a portfolio project made generate beautiful gradient colors and can be used for real projects or just for fun.`,
      snapshots: [""],
    },
    do: {
      link: "https://fdo.netlify.app/",
      title: "Debt Office",
      desc: `
      This is a portfolio project made with react/Redux/Firebase.
use(test@test.com/test@test.com) for login email and password. When logged in, you can enable registration from settings and test out registration.`,
      snapshots: [""],
    },
    cm: {
      link: "https://contactman.netlify.app/",
      title: "Contact manager",
      desc: `
      Play react application. This project shows knowledge of basic React Js:
      React Components and JSX.
React Router.
Component state management.
Context api for global state management.
Making asynchronous calls to the Json placeholder fake rest api using "async/await".`,
      snapshots: [""],
    },
    po: {
      link: "https://visionary-unicorn-01cd18.netlify.app/",
      title: "Portfolio 2023",
      desc: "Portfolio website for leo ojigbo. Started with a simple design on Figma and implemented the code in react js.",
      snapshots: [""],
    },
    cs: {
      link: "https://coursera.org/share/536d168deef2387ebf2813816258e82a",
      title: "Cybersecurity: Developing a Program for Your Business",
      desc: " A four course specialization from coursera and the University system of Georgia in the USA.",
      snapshots: [""],
    },
    jp: {
      link: "https://coursera.org/share/105977e0f0daf38da6e168ccdd4744ff",
      title: "Java Programming and Software Engineering Fundamentals",
      desc: "A five course specialization from coursera and Duke University in the USA.",
      snapshots: [""],
    },
    fr: {
      link: "https://coursera.org/share/00585f5957434e25226740814677c09e",
      title: "Full-Stack Web Development with React",
      desc: "A four course specialization from coursera and the University of science and technology Hong Kong.",
      snapshots: [""],
    },
    pe: {
      link: "https://coursera.org/share/e8d93dbdee04c20321f85f82a55f1e1b",
      title: "Python for Everybody",
      desc: "A five course specialization from coursera and the University of Michigan in the USA.",
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
                width: "360px",
                borderRadius: "26px",
                height: "40vh",
                background: "#fff",
                position: "relative",
                padding: "24px",
                overflow:"auto"
              }}
              className="scroll-hide"
            >
              <div style={{position:"absolute",right:"24px",top:"24px"}} className="flex ">
                <span
                  onClick={() => setShowModal("")}
                  className="animate-pulse ml-auto cursor-pointer"
                >
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
