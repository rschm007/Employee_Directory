const Header = () => {
  return (
      <header className="w-full flex-none">
        <div className="lg:text-center py-8 bg-indigo-900">
          <h1 className="text-4xl text-white font-bold tracking-wide">
            Employee Directory
          </h1>
          <p className="mt-2 text-base text-gray-300">
            Search for any employee, or use the column headers to sort by
            category.
          </p>
        </div>
      </header>
  );
};

export default Header;