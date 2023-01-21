import { EmailRounded, GitHub } from "@mui/icons-material";
import { Celsius, Document } from "iconsax-react";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const IconsSocial = ({ name, link }) => {
  return (
    <div className="cursor-pointer">
      <a href={link} download rel="noreferrer">
        {name === "Cv" && <Document variant="Bold" color="#6D9FFF" size={25} />}
      </a>
      <a href={link} target="_blank" rel="noreferrer">
        {name === "Credly" && (
          <Celsius variant="Bold" color="#0E4B3D" size={25} />
        )}
        {name === "LinkedIn" && <FaLinkedinIn size={25} color={"#3F63A9"} />}
        {name === "Github" && (
          <GitHub
            sx={{
              width: "25px",
              color: "#1E1E1E",
            }}
          />
        )}
        {name === "Gmail" && (
          <EmailRounded
            sx={{
              color: "#F33D3D",
              width: "25px",
            }}
          />
        )}
      </a>
    </div>
  );
};

export default IconsSocial;
