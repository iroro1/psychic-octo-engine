import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Projects = ({ onClickFn }) => {
  const ctx = useContext(ThemeContext);

  return (
    <div
      style={{
        fontWeight: "500",
        fontSize: "12px",
        overflow: "auto",
        height: "80%",
      }}
      className={`${ctx.value === "dark" ? "text-[#bbb]" : "text-[#7A7878]"}`}
    >
      <div
        onClick={() => onClickFn("maps")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Interactive maps
      </div>
      <div
        onClick={() => onClickFn("fingerprint")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Compare Fingerprints
      </div>
      <div
        onClick={() => onClickFn("liveness")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Liveness Detector
      </div>
      <div
        onClick={() => onClickFn("imgToText")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Cecure OCR
      </div>
      <div
        onClick={() => onClickFn("ap")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        approko Saas Accelerator
      </div>
      <div
        onClick={() => onClickFn("av")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Avenc
      </div>
      <div
        onClick={() => onClickFn("ci")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Cecure Intel
      </div>
      <div
        onClick={() => onClickFn("et")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Etiaba
      </div>
      <div
        onClick={() => onClickFn("ps")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Playshaka
      </div>
      <div
        onClick={() => onClickFn("js")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Jously
      </div>
      <div
        onClick={() => onClickFn("ab")}
        className="mb-[5px] cursor-pointer hover:text-[#14755E]"
      >
        Ask Betty
      </div>
    </div>
  );
};

export default Projects;
