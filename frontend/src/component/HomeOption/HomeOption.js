import React from "react";
import "./HomeOption.css";
import { OptionData } from "./OptionData.js";

const HomeOption = () => {
  return (
    <div className="basic">
      {OptionData.map((option, index) => {
        return <p className="optionBorder">{option.info}</p>;
      })}
    </div>
  );
};

export default HomeOption;
