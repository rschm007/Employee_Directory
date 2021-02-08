import React from "react";

const SortColumn = (props) => {
  return (
    <div
      data-direction={props.direction}
      data-column={props.column} // identifies which column the user clicked on
      onClick={props.handleSortClick}
    >
      {props.children}
      <span className="mx-2">{props.arrow}</span>
    </div>
  );
};

export default SortColumn;
