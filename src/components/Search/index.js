import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";

const Search = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="search flex-1 mt-10">
            <form className="m-4 flex justify-center">
                <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Search" />
                <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Search</button>
            </form>
        </div>
    )
}

export default Search;