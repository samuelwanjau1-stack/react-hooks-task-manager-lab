import { useRef } from "react";

const SearchBar = ({ onSearch }) => {
  const searchInput = useRef();

  const handleSearch = () => {
    // This sends the current value of the input up to App.jsx
    onSearch(searchInput.current.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Search tasks..."
      />
    </div>
  );
};

export default SearchBar;