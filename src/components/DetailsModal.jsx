import { Button } from "@mui/material";
import React from "react";

const DetailsModal = ({ data }) => {
  const { title, desc, snapshots, link } = data;
  return (
    <div className="h-[95%] w-[100%] mt-2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="w-[400px]">
          <h2 className="text-[30px] font-[700] text-[#7A7878]">{title}</h2>
          <p className="text-[12px] font-[400] text-[#7A7878]">{desc}</p>
        </div>
        <div>
          <a href={link} target="_blank">
            <Button
              sx={{
                width: "200px",
                height: "45px",
                background: "#14755E",
                color: "#fff",
                borderRadius: "8px",

                "&:hover":{
                background: "#14755E90",
                }
              }}
            >
              View
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
