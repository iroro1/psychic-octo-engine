import { ClickAwayListener } from "@mui/material";
import { CloseCircle, Moon, Sun } from "iconsax-react";
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ab from "../assets/img/askbetty.jpg";
import av from "../assets/img/avenc.jpg";
import maps from "../assets/img/maps.jpeg";
import chatApp from "../assets/img/chatApp.png";
import heal from "../assets/img/heal.png";
import et from "../assets/img/etiaba.jpg";
import fingerprint from "../assets/img/fingerprint.jpg";
import imgToText from "../assets/img/imgToText.jpg";
import jobSearch from "../assets/img/jobSearch.png";
import liveness from "../assets/img/liveness.jpg";
import ps from "../assets/img/playshaka.jpg";
import profpic from "../assets/img/profpic.jpeg";
import recipieAppUi from "../assets/img/recipieAppUI.png";
import ojigboleocv from "../assets/ojigboleocv.pdf";
import Articles from "../components/Articles";
import Courses from "../components/Courses";
import DetailsModal from "../components/DetailsModal";
import IconsSocial from "../components/IconsSocial";
import PlayProjects from "../components/PlayProjects";
import Projects from "../components/Projects";
import TabbedDisplay from "../components/TabbedDisplay";
import TechTools from "../components/TechTools";
import ThemeContext from "../context/ThemeContext";
import "./Home.css";

const Home = () => {
  const projectData = {
    recipieApp: {
      type: "mobileApp",
      ios: "exp://u.expo.dev/update/ba393cf1-d5f2-4aed-b89a-d195ce746d0a",
      android: "exp://u.expo.dev/update/0d9cb84e-a562-47d2-a4dc-f578918b3fc7",
      title: "Chat Mobile App",
      desc: "A cross functional mobile app written in react native expo and published via the expo link. Download Expo Go on your device to test the app",
      snapshots: [recipieAppUi],
    },
    chatApp: {
      link: "https://expo.dev/accounts/iroro1/projects/code-athon-3/updates/ec97448c-32dd-44fb-a3ac-71f657aa6911",
      title: "Chat Mobile App",
      desc: "A cross functional mobile app written in react native expo and published via the expo link. Download Expo Go on your device to test the app",
      snapshots: [chatApp],
    },
    jobSearch: {
      link: "https://expo.dev/@iroro1/rnapp?serviceType=classic&distribution=expo-go",
      title: "Job Search Mobile App",
      desc: "A cross functional mobile app written in react native expo and published via the expo link. Download Expo Go on your device to test the app",
      snapshots: [jobSearch],
    },
    heal: {
      link: "https://heallence.com/",
      title: "Heallence.com",
      desc: "A web application utilizing ML/AI run diagnoses for clients. I happen to be a part of the team that got this application from ideation to production.",
      snapshots: [heal],
    },
    liveness: {
      link: "https://cecureintel.com/demo/ML/liveness",
      title: "Liveness Detector",
      desc: "A web application utilizes ML to test liveness",
      snapshots: [liveness],
    },
    maps: {
      link: "https://atlas.cecurepractice.link/",
      title: "Interactive maps",
      desc: "A web application utilizes maps api to display locations on a map with markers and levels on interactivity. Just hit the login BUTTON.",
      snapshots: [maps],
    },
    imgToText: {
      link: "https://cecureintel.com/demo/ML/cecure-ocr",
      title: "Cecure Ocr",
      desc: "A web application utilizes ML to convert image files to text",
      snapshots: [imgToText],
    },
    fingerprint: {
      link: "https://cecureintel.com/demo/ML/compare-fingerprints",
      title: "Compare Fingerprints",
      desc: "A web application utilizes ML to check fingerprints",
      snapshots: [fingerprint],
    },
    ab: {
      link: "https://dev.ask-betty.com/",
      title: "Ask Betty",
      desc: "A web application utilizes ML to predict the right gift items for your loved ones",
      snapshots: [ab],
    },
    js: {
      link: "https://jously.com/",
      title: "Jously",
      desc: "A web application that enables users send cards to thier loved. I led the frontend agile team to this delivery, with new features on the way",
      snapshots: [],
    },
    ps: {
      link: "https://playshaka.online/home",
      title: "Playshaka",
      desc: "A web application that keeps users glued to their devices and entertained for hours. Streaming videos, audios and radios. Realtime access to news and steady feature increments. I led the frontend agile team to this delivery.",
      snapshots: [ps],
    },
    et: {
      link: "https://etiaba.com/",
      title: "Etiaba",
      desc: "Etiaba is an all in one accounting software created to solve all accounting needs. It consist of a website, webapp and mobile app. I led the frontend team to delivering this project as part of a scrum team.",
      snapshots: [et],
    },
    av: {
      link: "https://avencapp.com/",
      title: "Avenc",
      desc: "A website with the ability to run complex marketing campaigns with ease.  ",
      snapshots: [av],
    },
    ap: {
      link: "https://react.dev.approko.be/",
      title: "Approko",
      desc: "The website for Approko saas accelerator template built by team. I was also responsible for building the virtual support center with ability for agents to take calls and chats",
      snapshots: [],
    },
    ci: {
      link: "https://cecureintel.com/",
      title: "Cecure Intelligence",
      desc: "The website for CIL built and maintained by my team",
      snapshots: [],
    },
    im: {
      link: "https://iroro1.github.io/lionK.com/imageFilter/index.html",
      title: "Image App",
      desc: `
      This app is created using the Duke Learn to Program Js Library which adds a layer of abstraction to image processing.
      This course has increased my interest in image processing and i intend to make additional research in that field as soon as possible. My most interesting part is the Steganography part . The idea of Steganography is to hide data in images using simple Math. Utilising base 2 numbers or even decimals, you can hide images under other images or even text under images.
      `,
      snapshots: [],
    },
    dm: {
      link: "https://iroro1.github.io/lionK.com/DrumMachine/index.html",
      title: "Drum Machine",
      desc: `
      This is a portfolio project made to mimic a music pad. Each key produces sounds and can fun to play with.`,
      snapshots: [],
    },
    mrk: {
      link: "https://iroro1.github.io/lionK.com/Markdown/index.html",
      title: "Markdown Interpreter",
      desc: `
      This is a portfolio project to interpret markdown syntax`,
      snapshots: [],
    },
    bg: {
      link: "https://iroro1.github.io/lionK.com/backgroundGen(DOM%20MANIPULATION%202)/index.html",
      title: "Background Gradient",
      desc: `
      This is a portfolio project made generate beautiful gradient colors and can be used for real projects or just for fun.`,
      snapshots: [],
    },
    quote: {
      link: "https://iroro1.github.io/lionK.com/quote/index.html#",
      title: "Quote Generator",
      desc: `
      This is a portfolio project for generating random quotes .`,
      snapshots: [],
    },
    do: {
      link: "https://fdo.netlify.app/",
      title: "Debt Office",
      desc: `
      This is a portfolio project made with react/Redux/Firebase.
use(test@test.com/test@test.com) for login email and password. When logged in, you can enable registration from settings and test out registration.`,
      snapshots: [],
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
      snapshots: [],
    },
    po: {
      link: "https://ojigboleo.netlify.app/",
      title: "Portfolio 2023",
      desc: "Portfolio website for leo ojigbo. Started with a simple design on Figma and implemented the code in react js.",
      snapshots: [],
    },
    bc: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/5QMVK4NSYRKL",
      title: "Blockchain",
      desc: " A four course specialization from Coursera and the University of Buffalo in the USA.",
      snapshots: [],
    },
    cs: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QRKD2RYHT6YC",
      title: "Cybersecurity: Developing a Program for Your Business",
      desc: " A four course specialization from Coursera and the University system of Georgia in the USA.",
      snapshots: [],
    },
    jp: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/33L2QLQ6R8Z6",
      title: "Java Programming and Software Engineering Fundamentals",
      desc: "A five course specialization from Coursera and Duke University in the USA.",
      snapshots: [],
    },
    fr: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/B43PBP5BU5W2",
      title: "Full-Stack Web Development with React",
      desc: "A four course specialization from Coursera and the University of science and technology Hong Kong.",
      snapshots: [],
    },
    mf: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2U9DFUQ37GB6",
      title: "Meta Frontend Developer",
      desc: "A nine course specialization from Coursera and Meta team.",
      snapshots: [],
    },
    mr: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/DNUUUV644EKS",
      title: "Meta React Native Specialization",
      desc: "A nine course specialization from Coursera and Meta team.",
      snapshots: [],
    },
    pe: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8VH6RXRR7JGX",
      title: "Python for Everybody",
      desc: "A five course specialization from Coursera and the University of Michigan in the USA.",
      snapshots: [],
    },
    devopsaws: {
      link: "https://www.coursera.org/account/accomplishments/specialization/C7HMVLGQUCAD",
      title: "DevOps on AWS ",
      desc: "A five course specialization from Amazon web services",
      snapshots: [],
    },
    saasaws: {
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MEEBEQJ2WLT9",
      title: "AWS Cloud Solutions Architect",
      desc: "A four course specialization from Amazon web services",
      snapshots: [],
    },
    cln: {
      link: "https://colornames.netlify.app/",
      title: "Colornames",
      desc: "A website that gives users the names of about 2332 colours and also allows users to copy the color codes.",
      snapshots: [],
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
  const { value, setValue } = useContext(ThemeContext);

  return (
    <div className="scroll-hide">
      {value === "dark" ? (
        <Sun
          className="fixed right-3 top-3 cursor-pointer"
          onClick={() => {
            localStorage.setItem("myTheme", "light");
            setValue("light");
          }}
        />
      ) : (
        <Moon
          className="fixed right-3 top-3 cursor-pointer"
          onClick={() => {
            localStorage.setItem("myTheme", "dark");
            setValue("dark");
          }}
        />
      )}
      <ToastContainer />

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
          className="backdrop-blur-sm"
        >
          <ClickAwayListener onClickAway={() => setShowModal("")}>
            <div
              style={{
                borderRadius: "26px",
                background: value === "dark" ? "#555" : "#fff",
                position: "relative",
                padding: "24px",
                overflow: "hidden",
              }}
              className="scroll-hide w-[90%] h-[350px] md:w-[400px]"
            >
              <div
                style={{ position: "absolute", right: "24px", top: "14px" }}
                className="flex cursor-pointer w-full"
              >
                <span
                  onClick={() => setShowModal("")}
                  className="animate-pulse ml-auto cursor-pointer"
                >
                  <CloseCircle
                    variant="Bold"
                    color={value === "dark" ? "#ccc" : "#A63A5A"}
                    size={27}
                  />
                </span>
              </div>
              <DetailsModal data={projectData[showModal]} />
            </div>
          </ClickAwayListener>
        </div>
      )}
      <div className="scroll-hide">
        <div className="top container scroll-hide">
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
              <IconsSocial name={"ojigboleocv"} link={ojigboleocv} />
              <IconsSocial name={"Credly"} link={social.credly} />
              <IconsSocial name={"LinkedIn"} link={social.linkedIn} />
              <IconsSocial name={"Github"} link={social.gitHub} />
              <IconsSocial name={"Gmail"} link={social.email} />
            </div>
          </div>

          <div className="top-right">
            <h2>
              <span
                className={`${
                  value === "dark" ? "text-[#bbb]" : "text-[#14755e]"
                }`}
              >
                Leo
              </span>{" "}
              OJIGBO
            </h2>
            <h1
              className={`${
                value === "dark" ? "text-[#bbb]" : "text-[#14755e]"
              } text-[96px] w-[600px] leading-[95px] font-[300]`}
            >
              Software Engineer
            </h1>
          </div>
        </div>

        {/* Buttom Row */}
        <div className="container pt-[50px] flex md:flex-row flex-col items-center gap-[40px] scroll-hide">
          {/* LHS */}
          <div className="buttom-left ">
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
          <div className="buttom-right ">
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

        {/* Articles */}
        <div className="container pb-14">
          <TabbedDisplay
            innerheight="100%"
            outerHeight="100%"
            height="100%"
            dataArray={[
              {
                title: "Articles Published",
                Component: <Articles />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
