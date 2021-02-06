import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-white">
      <header className="w-full mx-auto">
        <div className="lg:text-center py-8 bg-indigo-900">
          <h1 className="text-4xl text-white font-bold tracking-wide">Employee Directory</h1>
          <p className="mt-2 text-base text-gray-300">
            Search for any employee, or use the column headers to sort by
            category.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
