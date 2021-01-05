import React from "react";

const Action = (props) => {
  return (
    <span className="action">
      <button disabled={props.unClickable()} onClick={props.handleRandomPick}>
        {/* {props.name}
         */}
        Pick An Option
      </button>
    </span>
  );
};

export default Action;
