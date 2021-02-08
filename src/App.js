import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import API from "./utils/API";

function App() {
  // set states
  const [users, setUsers] = useState([]); // user state (gathers all users) --- equiv: users = [];
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [countries, setCountries] = useState([]); // country state
  //   const [cities, setCities] = useState([]); // city state
  const [search, setSearch] = useState({
    // search state that gathers search input
    // sorter state
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
        // capture json data in vars
        setUsers(res.data.results); // equiv users = res.data.results; reassigns values of var
        setFilteredUsers(res.data.results);
        // map countries and cities
        // const countries = res.data.map((user) => {
        //   return user.location.country;
        // });
        // const cities = res.data.map((user) => {
        //   return user.location.city;
        // });
        // setCountries(countries);
        // setCities(cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function for handling search queries on search forms
  const handleInputChange = (e) => {
    // TODO: SWITCH STATEMENT FOR EACH SEARCH COLUMN INPUT

    // spread in the search object and find the e.target.name that matches the value
    // filter through users array based on e.target.value
    const filteredUsers = users.filter(user => user.name.first.startsWith(e.target.value));
    setFilteredUsers(filteredUsers);    
    setSearch({
      ...search,
      [e.target.name]: e.target.value, // e.target.name = event target string name; e.target.value = keydown
    });
  };

  const handleSortClick = (e) => {

  }

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
