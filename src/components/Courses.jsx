import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Courses = ({ onClickFn }) => {
  const ctx = useContext(ThemeContext);

  return (
    <div
      style={{
        // color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
        overflow: "auto",
        height: "80%",
      }}
      className={`${ctx.value === "dark" ? "text-[#bbb]" : "text-[#7A7878]"}`}
    >
      <p
        onClick={() => onClickFn("devopsaws")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        DevOps on AWS (Specialization)
      </p>
      <p
        onClick={() => onClickFn("saasaws")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        AWS Solutions Architect (Specialization)
      </p>
      <p
        onClick={() => onClickFn("bc")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Blockchain (Specialization)
      </p>
      <p
        onClick={() => onClickFn("mr")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Meta Front React native (Specialization)
      </p>
      <p
        onClick={() => onClickFn("mf")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Meta Front end Developer (Professional Certificate)
      </p>
      <p
        onClick={() => onClickFn("cs")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Cybersecurity: Developing a Program for Your Business (Specialization)
      </p>
      <p
        onClick={() => onClickFn("jp")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Java Programming and Software Engineering Fundamentals (Specialization)
      </p>
      <p
        onClick={() => onClickFn("fr")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Full-Stack Web Development with React (Specialization )
      </p>
      <p
        onClick={() => onClickFn("pe")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Python for Everybody (Specialization )
      </p>
    </div>
  );
};

export default Courses;
