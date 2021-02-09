import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SortColumn = (props) => {
  return (
    <div>
      {props.children}
      <FontAwesomeIcon
        icon={props.icon}
        className="mx-2 cursor-pointer"
        data-direction={props.direction} // identifies which direction the props.arrow is pointing
        data-column={props.column} // identifies which column the user clicked on
        onClick={props.handleSortClick}
      />
    </div>
  );
};

export default SortColumn;
