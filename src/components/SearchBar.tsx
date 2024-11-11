import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search..." }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-400 dark:border-gray-600 rounded-full px-4 py-2 w-full max-w-md mx-auto">
      {/* Search Icon */}
      <AiOutlineSearch
        className="text-gray-500 dark:text-gray-400 mr-2"
        size={20}
      />

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        style={{ resize: "vertical" }}
      />
    </div>
  );
};

export default SearchBar;
