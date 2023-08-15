import { Star, StarHalfSharp } from "@mui/icons-material";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

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
      t: "NEXT JS",
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
    const star = (
      <Star sx={{ color: "#14755E", height: "15px", width: "15px" }} />
    );
    const starFail = (
      <StarHalfSharp
        sx={{
          color: "#A63A5A",
          height: "15px",
          width: "15px",
        }}
      />
    );
    let a = [];
    for (let i = 0; i < numOfStars; i++) {
      if (i < n) {
        a.push(star);
      } else {
        a.push(starFail);
      }
    }
    return <p className="flex gap-1">{a}</p>;
  };
  const ctx = useContext(ThemeContext);

  return (
    <div
      style={{
        // color: "#7A7878",
        fontWeight: "500",
        fontSize: "12px",
      }}
    >
      {tek.map((tool, i) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          key={`${i}`}
          className="mb-[5px] cursor-pointer hover:text-[#14755E]"
        >
          <span
            className={`${
              ctx.value === "dark" ? "text-[#bbb]" : "text-[#7A7878]"
            }`}
          >
            {tool.t}
          </span>
          <span>{genStars(tool.r)}</span>
        </div>
      ))}
    </div>
  );
};

export default TechTools;
