import React, { useState } from "react";

const TabbedDisplay = ({
  dataArray,
  maxWidth = "500px",
  innerheight = "230px",
  outerHeight = "260px",
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const Component = dataArray[activeTab].Component;

  return (
    <div
      style={{
        width: "100%",
        padding: "25px 36px",
        height: outerHeight,
        background: "white",
        borderRadius: "8px",
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
        className="text-[13px] md:text-[24px]"
      >
        {dataArray.map((itm, i) => (
          <span
            style={{
              color: i === activeTab ? "#0E4B3D" : "#14755E",
              cursor: "pointer",
            }}
            key={itm.title}
            onClick={() => setActiveTab(i)}
          >
            {itm.title}
          </span>
        ))}
      </div>
      <div style={{ height: innerheight, overflow: "auto" }}>{Component}</div>
    </div>
  );
};

export default TabbedDisplay;
