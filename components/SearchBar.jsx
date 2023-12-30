"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const route = `/watches?model=${searchValue}`;

    router.push(route);
  };

  useEffect(() => {
    router.push(`/watches`);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="relative w-full flex items-center rounded-xl px-2 search hover:shadow-gold-shadow bg-brown border border-gold text-gold"
      >
        {/* Search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        {/* Input */}
        <input
          type="text"
          className="text-lg bg-transparent border-transparent focus:border-transparent focus:ring-0"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
