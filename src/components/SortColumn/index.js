import React from "react";

const SortColumn = (props) => {
  return (
    <div
      data-direction={props.direction}
      data-column={props.column}
      onClick={props.onClick}
    >
      {props.children}
      <span className="mx-2">{props.arrow}</span>
    </div>
  );
};

export default SortColumn;
