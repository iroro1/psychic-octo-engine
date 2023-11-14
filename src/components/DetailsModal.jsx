import { Button } from "@mui/material";
import { Copy } from "iconsax-react";
import React from "react";
import { toast } from "react-toastify";

const DetailsModal = ({ data }) => {
  const { title, desc, link, snapshots, type, ios, android } = data;
  const copyFn = (itm) => {
    navigator.clipboard.writeText(itm);
    toast.success(
      "Copied to clipboard succesfully. Paste the code in your expo go app on your phone. ---" +
        itm,
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };
  return (
    <div className="h-[100%] w-[100%] mt-2 overflow-auto scroll-hide">
      <div
        className="h-[100%] pb-5"
        style={{
          position: "relative",
        }}
      >
        <div className="w-[100%] h-[100%]">
          <h2
            style={{ lineHeight: "30px" }}
            className="text-[18px] md:text-[26px]  font-[700] "
          >
            {title}
          </h2>
          <p className="text-[12px] font-[400] mb-3">{desc}</p>
          {type !== "mobileApp" && (
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
          )}
          {type === "mobileApp" && (
            <div classname="py-6 my-10">
              <div className="text-sm mb-4">
                IOS Expo Link{" "}
                <span className="flex pr-2">
                  {ios}{" "}
                  <Copy
                    onClick={() => copyFn(ios)}
                    className="cursor-pointer"
                    size={26}
                  />
                </span>
              </div>
              <div className="text-sm mb-4">
                ANDROID Expo Link{" "}
                <span className="flex pr-2">
                  {android}{" "}
                  <Copy
                    onClick={() => copyFn(android)}
                    className="cursor-pointer"
                    size={26}
                  />
                </span>
              </div>
            </div>
          )}
          {snapshots?.length > 0 &&
            snapshots?.map((itm) => (
              <img className="w-full mb-4 my-3" alt={title} src={itm} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
