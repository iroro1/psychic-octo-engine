import React from "react";

const PlayProjects = ({onClickFn}) => {
  return (
    <div
      style={{
        color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
      }}
    >
      <div onClick={()=>onClickFn("im")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Image App
      </div>
      <div onClick={()=>onClickFn("dm")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Drum Machine
      </div>
      <div onClick={()=>onClickFn("bg")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Background Generator
      </div>
      <div onClick={()=>onClickFn("do")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Debt Office
      </div>
      <div onClick={()=>onClickFn("cm")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Contact manager
      </div>
      <div onClick={()=>onClickFn("po")} className="mb-[5px] cursor-pointer hover:text-[#14755E]">
        Portfolio Website
      </div>
    </div>
  );
};

export default PlayProjects;
