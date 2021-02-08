import React from "react";
import API from "../../utils/API";
import TableRow from "../TableRow";

const styles = {
  thStyles: "p-5",
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
    <div className="table m-10 rounded-sm border-2 border-light-blue-500 border-opacity-25">
      <table className="table-auto justify-center">
        <thead className="bg-gray-200">
          <tr>
            <th className={styles.thStyles}>Image</th>
            <th className={styles.thStyles}>Name</th>
            <th className={styles.thStyles}>Email</th>
            <th className={styles.thStyles}>Phone</th>
            <th className={styles.thStyles}>DOB</th>
          </tr>
        </thead>
        <tbody>
            {renderRows(props.users)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
