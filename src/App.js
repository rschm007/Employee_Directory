import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import API from "./utils/API";

function App() {
  // set states
  const [users, setUsers] = useState([]); // user state (gathers all users) --- equiv: users = [];
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    reg: "",
  });
  const [sort, setSort] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    reg: "",
  });

  // hook to get list of users from API
  useEffect(() => {
    API.getUsers(12)
      .then((res) => {
        // capture json data
        setUsers(res.data.results); // equiv users = res.data.results; reassigns values of var
        setFilteredUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function for handling search queries on search inputs
  const handleInputChange = (event) => {
    // capture value of the column header that the user targets
    let columnHeader = event.target.name;
    // switch statement that passes columnHeader to appropriate filter function
    switch (columnHeader) {
      case "name":
        // spread in the search object and find the e.target.name that matches the value
        // filter through users array based on e.target.value
        const filteredUsers = users.filter((user) =>
          user.name.first.startsWith(event.target.value)
        );
        setFilteredUsers(filteredUsers);
        setSearch({
          ...search,
          [event.target.name]: event.target.value, // e.target.name = event target string name; e.target.value = keydown
        });
        break;
      default:
        break;
    }
  };

  const handleSortClick = (e) => {
    // set a new sort object
    let newSort = { ...sort };
    // capture value of column header
    const columnHeader = e.target.dataset.name;

    switch (columnHeader) {
      case "Name":

      case "Email":

      case "Phone":

      case "Age":

      case "Reg":

      default:
    }
  };

  return (
    <div className="App flex-auto mx-auto">
      <div className="wrapper">
        <Header />
        <Table
          users={filteredUsers}
          handleInputChange={handleInputChange}
          {...search}
          handleSortClick={handleSortClick}
        />
      </div>
    </div>
  );
}

export default App;
