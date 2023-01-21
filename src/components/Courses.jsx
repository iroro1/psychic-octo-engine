import React from "react";

const Courses = ({ onClickFn }) => {
  return (
    <div
      style={{
        color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
      }}
    >
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
