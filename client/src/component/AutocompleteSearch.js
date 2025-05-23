import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const data = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Strawberry", "Blueberry", "Pineapple"];

export default function AutoCompleteSearch() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setFilteredItems(data.filter((item) => item.toLowerCase().includes(value.toLowerCase())));
      setActiveIndex(-1);
    } else {
      setFilteredItems([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(filteredItems[activeIndex]);
      setFilteredItems([]);
    }
  };

  return (
    <div className="relative w-80 mx-auto mt-10">
      <div className="relative">
        {/* Input field */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder=""
          className="w-full p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Icon as a placeholder (only shown when input is empty) */}
        {!query && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none flex items-center gap-2">
            <FaSearch />
            <span className="text-sm">Search...</span>
          </div>
        )}
      </div>
      {filteredItems.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border rounded-md mt-1 shadow-lg">
          {filteredItems.map((item, index) => (
            <li
              key={item}
              className={`p-2 cursor-pointer ${
                index === activeIndex ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onMouseDown={() => setQuery(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
