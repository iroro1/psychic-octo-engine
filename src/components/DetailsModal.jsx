import { Button } from "@mui/material";
import React from "react";

const DetailsModal = ({ data }) => {
  const { title, desc, link, snapshots } = data;
  return (
    <div className="h-[40vh] w-[100%] mt-2 overflow-auto">
      <div
        className="h-[100%] pb-5"
        style={{
          position: "relative",
        }}
      >
        <div className="w-[280px] h-[100%] overflow-auto">
          <h2
            style={{ lineHeight: "30px" }}
            className="text-[18px] md:text-[26px]  font-[700] "
          >
            {title}
          </h2>
          <p className="text-[12px] font-[400] mb-3">{desc}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <Button
              sx={{
                width: "130px",
                height: "40px",
                background: "#14755E",
                color: "#fff",
                borderRadius: "8px",
                marginBottom: "20px",
                "&:hover": {
                  background: "#14755E90",
                },
              }}
            >
              View
            </Button>
          </a>
          {snapshots?.length > 0 &&
            snapshots?.map((itm) => (
              <img className="w-full mb-4" alt={title} src={itm} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
