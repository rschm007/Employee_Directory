import React from "react";

const styles = {
  tdStyles: "px-10 py-2 whitespace-nowrap border border-gray-300",
  divOneStyles: "items-center",
  divTwoStyles: "h-10 w-10",
  imgStyles: "h-10 w-10 rounded-sm",
  nameDivStyles: "ml-4",
  textStyles: "text-sm font-base text-gray-900",
};

const TableRow = (props) => {
  const regDate = new Date(props.registered).toDateString();
  return (
    <tr>
      <td className={styles.tdStyles}>
        <div className={styles.divOneStyles}>
          <div className={styles.divTwoStyles}>
            <img
              className={styles.imgStyles}
              src={props.thumbnail}
              alt={props.name.first + " " + props.name.last}
            ></img>
          </div>
        </div>
      </td>
      <td className={styles.tdStyles}>
        <div className={styles.nameDivStyles}>
          <div className={styles.textStyles}>
            {props.name.first + " " + props.name.last}
          </div>
          <div className={styles.textStyles}>{props.username}</div>
        </div>
      </td>
      <td className={styles.tdStyles}>
        <div className={styles.textStyles}>
          {props.location.street.number + " " + props.location.street.name}
        </div>
        <div className={styles.textStyles}>
          {props.location.city + ", " + props.location.country}
        </div>
      </td>
      <td className={styles.tdStyles}>
        <div className={styles.textStyles}>{props.email}</div>
        <div className={styles.textStyles}>{props.phone}</div>
      </td>
      <td className={styles.tdStyles}>
        <div className={styles.textStyles}>{props.age}</div>
      </td>
      <td className={styles.tdStyles}>
        <div className={styles.textStyles}>{regDate}</div>
      </td>
    </tr>
  );
};

export default TableRow;
