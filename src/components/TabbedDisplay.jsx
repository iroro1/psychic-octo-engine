import React, { useState } from "react";

const TabbedDisplay = ({ dataArray }) => {
  const [activeTab, setActiveTab] = useState(0);
  const Component=   dataArray[activeTab].Component
  return (
    <div>
      <div>
        {dataArray.map((itm,i) => (
          <span key={i} onClick={()=>setActiveTab(i)}>{itm.title}</span>
        ))}
      </div>
      <div>
        <Component />
      </div>
    </div>
  );
};

export default TabbedDisplay;
