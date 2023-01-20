import React, { useState } from "react";

const TabbedDisplay = ({ dataArray }) => {
  const [activeTab, setActiveTab] = useState(0);
  const Component = dataArray[activeTab].Component;

  return (
    <div style={{ width: "100%", padding: "25px 36px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "25px",
          fontSize: "1.2rem",
          fontWeight: "700",
          borderBottom: "1px solid #DDD0D050",
          paddingBottom: "7px",
          marginBottom: "11px",
        }}
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
      <div>
        {Component}
      </div>
    </div>
  );
};

export default TabbedDisplay;
