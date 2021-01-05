import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div className="options-list">
    <div className="remove-all-container container">
      <h3>Your options:</h3>
      <button
        disabled={props.unClickable()}
        className="btn-small btn-small--link "
        onClick={props.handleDeleteAll}
      >
        Remove all
      </button>
    </div>

    {props.options.length == 0 && (
      <h4 className="start-message">Please add an option to begin!</h4>
    )}

    {props.options.map((option, index) => {
      return (
        <Option
          key={index}
          optionText={option}
          number={index}
          handleRemoveSingleOption={props.handleRemoveSingleOption}
        />
      );
    })}
  </div>
);

export default Options;
