import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const TabbedDisplay = ({
  dataArray,
  innerheight = "230px",
  outerHeight = "260px",
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const Component = dataArray[activeTab].Component;
  const ctx = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100%",
        padding: "25px 6px",
        height: outerHeight,
        background: ctx.value === "dark" ? "#0F172B90" : "white",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "25px",
          fontWeight: "700",
          borderBottom: "1px solid #DDD0D050",
          paddingBottom: "7px",
          marginBottom: "1px",
          overflow: "auto",
        }}
        className="text-[13px] md:text-[24px] px-4 md:px-2"
      >
        {dataArray.map((itm, i) => (
          <span
            style={{
              color:
                ctx.value === "dark"
                  ? i === activeTab
                    ? "#fff"
                    : "#ffffff80"
                  : i === activeTab
                  ? "#0E4B3D"
                  : "#14755E",
              cursor: "pointer",
            }}
            key={itm.title}
            onClick={() => setActiveTab(i)}
          >
            {itm.title}
          </span>
        ))}
      </div>
      <div
        className="px-4 md:px-2  pt-2 overflow-auto"
        style={{ height: innerheight }}
      >
        {Component}
      </div>
    </div>
  );
};

export default TabbedDisplay;
