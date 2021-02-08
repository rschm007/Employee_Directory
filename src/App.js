import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import API from "./utils/API";

function App() {
  // set states
  const [users, setUsers] = useState([]);
  const [targetUsers, setTargetUsers] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // hook to get list of users from API
  useEffect(() => {
    API.getUsers(12)
      .then((res) => {
        // capture json data in vars
        setUsers(res.data.results);
        setTargetUsers(res.data.results);
        // map countries and cities
        const countries = res.data.map((user) => {
          return user.location.country;
        });
        const cities = res.data.map((user) => {
          return user.location.city;
        });
        setCountries(countries);
        setCities(cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App flex-auto mx-auto">
      <div className="wrapper">
        <Header />
        <Search />
        <Table users={targetUsers} />
      </div>
    </div>
  );
}

export default App;
