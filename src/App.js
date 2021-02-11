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
  const [sortedColumn, setSortColumn] = useState({
    sort: "desc",
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
    // set a new sort object
    let newSort = { ...sortedColumn };

    if (newSort.sort === "desc") {
      users.sort((a, b) => a.name.first > b.name.first ? 1 : -1);
      setSortColumn({
        sort: "asc",
      });
    } else if (newSort.sort === "asc") {
      users.sort((a, b) => a.name.first < b.name.first ? 1 : -1);
      setSortColumn({
        sort: "desc",
      });
    }
  };

  // function for handling which arrow to pass as a prop
  const handleArrowDirection = () => {
    
  }

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
