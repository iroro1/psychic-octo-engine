import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const PlayProjects = ({ onClickFn }) => {
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
      <div
        onClick={() => onClickFn("chatApp")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Chat App UI (Mobile APP)
      </div>
      <div
        onClick={() => onClickFn("cln")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Colornames
      </div>
      {/* <div
        onClick={() => onClickFn("pai")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Promptopia
      </div> */}
      <div
        onClick={() => onClickFn("jobSearch")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Job Search (Mobile APP)
      </div>
      <div
        onClick={() => onClickFn("im")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Image App
      </div>
      <div
        onClick={() => onClickFn("quote")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Quote Generator
      </div>
      <div
        onClick={() => onClickFn("mrk")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        MarkDown Interpreter
      </div>
      <div
        onClick={() => onClickFn("dm")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Drum Machine
      </div>
      <div
        onClick={() => onClickFn("bg")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Background Generator
      </div>
      <div
        onClick={() => onClickFn("do")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Debt Office
      </div>
      <div
        onClick={() => onClickFn("cm")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Contact manager
      </div>
      <div
        onClick={() => onClickFn("po")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Portfolio Website
      </div>
    </div>
  );
};

export default PlayProjects;
