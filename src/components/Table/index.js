import React from "react";
import API from "../../utils/API";
import TableRow from "../TableRow";
import Search from "../Search";
import SortColumn from "../SortColumn";

// import chevrons for sort clicks
import { ReactComponent as UpArrow } from "../../assets/chevron-up.svg";
import { ReactComponent as DownArrow } from "../../assets/chevron-down.svg";

const styles = {
  thStyles: "p-5 text-left",
};

const Table = (props) => {
    // create props for rendering rows - map users into rows
  const renderRows = (users) => {
    return users.map((user, index) => {
      return (
        <TableRow
          thumbnail={user.picture.thumbnail}
          name={user.name}
          username={user.login.username}
          email={user.email}
          phone={user.phone}
          location={user.location}
          age={user.dob.age}
          registered={user.registered.date}
          key={index}
        />
      );
    });
  };

  return (
    <div className="table w-auto flex-none m-10 rounded-sm border-2 border-light-blue-500 border-opacity-25">
      <table className="table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className={styles.thStyles}>Image</th>

            <th className={styles.thStyles}>
              <SortColumn>Name</SortColumn>
              <Search />
            </th>

            <th className={styles.thStyles}>
              <SortColumn>Email</SortColumn>
              <Search />
            </th>

            <th className={styles.thStyles}>
              <SortColumn>Phone</SortColumn>
              <Search />
            </th>

            <th className={styles.thStyles}>
              <SortColumn>Age</SortColumn>
              <Search />
            </th>

            <th className={styles.thStyles}>
              <SortColumn>Date Registered</SortColumn>
              <Search />
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(props.users)}</tbody>
      </table>
    </div>
  );
};

export default Table;
