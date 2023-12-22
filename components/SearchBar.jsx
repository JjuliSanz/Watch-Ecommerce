"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    router.push(`/watches`)
  }, [])

  return (
    <div className="flex justify-center w-1/3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
      >
        <input
          type="text"
          className="text-lg rounded search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
