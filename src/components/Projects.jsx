import React from "react";

const Projects = ({ onClickFn }) => {
  return (
    <div
      style={{
        color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
        overflow: "auto",
        height: "80%",
      }}
    >
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
