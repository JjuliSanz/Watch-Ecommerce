"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Filter from "./Filter";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    // Construir la ruta según el tipo de búsqueda
    const route = `/watches?model=${searchValue}`;

    // Navegar a la ruta correspondiente
    router.push(route);
  };

  useEffect(() => {
    router.push(`/watches`);
  }, []);

  return (
    <div className="flex justify-center items-center gap-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="relative w-full"
      >
        <input
          type="text"
          className="text-lg rounded-xl search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
      {/* <Filter/> */}
    </div>
  );
};

export default SearchBar;
