import { Button } from "@mui/material";
import React from "react";

const DetailsModal = ({ data }) => {
  const { title, desc, link } = data;
  return (
    <div className="h-[40vh] w-[100%] mt-2 overflow-hidden">
      <div
        className="h-[100%]"
        style={{
          position: "relative",
        }}
      >
        <div className="w-[280px] h-[65%] overflow-auto">
          <h2
            style={{ lineHeight: "30px" }}
            className="text-[18px] md:text-[26px]  font-[700] text-[#7A7878] "
          >
            {title}
          </h2>
          <p className="text-[12px] font-[400] text-[#7A7878]">{desc}</p>
        </div>

        <a
          style={{
            display: "absolute",
            bottom: "5px",
            right: "5px",
          }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            sx={{
              width: "130px",
              height: "40px",
              background: "#14755E",
              color: "#fff",
              borderRadius: "8px",
              "&:hover": {
                background: "#14755E90",
              },
            }}
          >
            View
          </Button>
        </a>
      </div>
    </div>
  );
};

export default DetailsModal;
