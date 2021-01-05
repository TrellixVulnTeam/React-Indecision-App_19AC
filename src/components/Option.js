import React from "react";

const Option = (props) => (
  <div className={`option ${props.number % 2 ? "even" : "odd"}`}>
    <div className="option-text">
      {props.number + 1}: {props.optionText}
    </div>
    <button
      className="btn-small btn-small--link"
      onClick={(e) => {
        // console.log(props.optionText);
        props.handleRemoveSingleOption(props.optionText);
      }}
    >
      {/* 🗑️ */}X
    </button>
  </div>
);

export default Option;
