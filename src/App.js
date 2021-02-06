import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-white">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
        <div className="lg:text-center bg-indigo-800">
          <h1 className="text-4xl text-white font-semibold tracking-wide uppercase">Employee Directory</h1>
          <p className="mt-2 max-w-2xl text-base text-gray-300 lg:mx-auto">
            Search for any employee, or use the column headers to sort by
            category.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
