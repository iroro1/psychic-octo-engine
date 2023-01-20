import { Star, Star1 } from "iconsax-react";
import React from "react";

const TechTools = () => {
  const tek = [
    {
      t: "HTML / CSS /JAVASCRIPT",
      r: 5,
    },
    {
      t: "REACT/REDUX/REST APIS ",
      r: 5,
    },
    {
      t: "AWS",
      r: 4,
    },
    {
      t: "NODE /EXPRESS / SQL / NOSQL",
      r: 4,
    },
    {
      t: "REACT NATIVE",
      r: 4,
    },
    {
      t: "UI / UX",
      r: 3,
    },
  ];
  const genStars = (n) => {
    const numOfStars = 5;
    const star = <Star1 size={15} color={"#14755E"} variant="Bold" />;
    const starFail = <Star1 size={15} color={"#A63A5A"} variant="Bold" />;
    let a = [];
    for (let i = 0; i < numOfStars; i++) {
      if (i < n) {
        a.push(star);
      } else {
        a.push(starFail);
      }
    }
    return <div className="flex gap-1">{a}</div>;
  };
  return (
    <div
      style={{
        color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
      }}
    >
      {tek.map((tool) => (
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className="mb-[5px] cursor-pointer hover:text-[#14755E]"
        >
          <span>{tool.t}</span>
          <span>{genStars(tool.r)}</span>
        </p>
      ))}
    </div>
  );
};

export default TechTools;
