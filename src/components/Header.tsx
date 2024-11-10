const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">Brand</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#section1" className="text-gray-600 hover:text-blue-500">
              Section 1
            </a>
          </li>
          <li>
            <a href="#section2" className="text-gray-600 hover:text-blue-500">
              Section 2
            </a>
          </li>
          <li>
            <a href="#section3" className="text-gray-600 hover:text-blue-500">
              Section 3
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
