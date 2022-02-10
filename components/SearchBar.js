import React, { useState, useEffect } from "react";
import { Input } from "antd";
function SearchBar(props) {
  const { Search } = Input;
  const [searchedPokemon, setSearchedPokemon] = useState("");

  useEffect(() => {
    props.func(searchedPokemon);
  }, [props, searchedPokemon]);

  function searchHandler(value) {
    setSearchedPokemon(value);
  }

  return (
    <Search
      placeholder="Search pokemons"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={searchHandler}
    />
  );
}

export default SearchBar;
