import React from "react";

const Projects = ({onClickFn}) => {
  return (
    <div
      style={{
        color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
      }}
    >
      <div onClick={()=>onClickFn("et")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">Etiaba</div>
      <div onClick={()=>onClickFn("ps")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Playshaka
      </div>
      <div onClick={()=>onClickFn("js")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">Jously</div>
    </div>
  );
};

export default Projects;
