import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="App flex mx-auto">
        <Header />
        <Search />
    </div>
  );
}

export default App;
