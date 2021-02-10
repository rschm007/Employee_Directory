import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import API from "./utils/API";
// import fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown, faChevronUp);

function App() {
  // set states
  const [users, setUsers] = useState([]); // user state (gathers all users) --- equiv: users = [];
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    // email: "",
    // phone: "",
    // age: "",
    // reg: "",
  });
  const [sortedColumn, setSortedColumn] = useState([]);

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
    // TODO: SWITCH STATEMENT FOR EACH SEARCH COLUMN INPUT
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
  };

  // function for handling sorting of columns
  const handleSortClick = (event) => {
    console.log("click");
    const userData = users.sort((user1, user2) => {
      return user1.name.last.localeCompare(user2.name.last);
    });
    return setUsers([...userData]);
  };

  return (
    <div className="App flex-auto mx-auto">
      <div className="wrapper">
        <Header />
        <Table
          icon={faChevronDown}
          users={filteredUsers}
          handleInputChange={handleInputChange}
          {...search}
          onClick={handleSortClick}
        />
      </div>
    </div>
  );
}

export default App;
