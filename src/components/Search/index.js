import React from "react";

const Search = (props) => {
  return (
    <div className="search mt-10">
      <form className="m-4 justify-center">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="userSearch"
          list="users"
          type="text"
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Search"
        />
        <button className="px-8 rounded-r-lg bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
