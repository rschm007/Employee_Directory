import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <form className="mt-1 justify-center">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="userSearch"
          list="users"
          type="text"
          className="rounded-lg p-1 w-auto border text-sm text-gray-800 border-gray-200 bg-white"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default Search;
