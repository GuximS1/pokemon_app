import React, { useState } from "react";
import Card from "./Card";
import { Pagination } from "antd";
import classes from "./PokemonPage.module.scss";
import SearchBar from "./SearchBar";
const PokemonPage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);
  const pokemonsVisited = (pageNumber - 1) * usersPerPage;
  const [searchValue, setSearchValue] = useState("");

  function pull_data(value) {
    setSearchValue(value);
  }

  const changePage = (page, pageSize) => {
    setPageNumber(page);
    setUsersPerPage(pageSize);
  };

  return (
    <div>
      <div className={classes.searchBar}>
        <SearchBar func={pull_data} />
      </div>
      {props.data.pokemons.results
        .slice(pokemonsVisited, pokemonsVisited + usersPerPage)
        .filter((item) => item.name.includes(searchValue))
        .map((item, index) => {
          return (
            <Card
              key={item.name}
              id={item.id}
              name={item.name}
              imgurl={item.image}
              pokemonurl={item.url}
            />
          );
        })}
      <div className={classes.pagination}>
        <Pagination
          current={pageNumber}
          defaultPageSize={usersPerPage}
          pageSize={usersPerPage}
          size="large"
          total={props.limit}
          onChange={changePage}
          pageSizeOptions={[10, 20, 50, 100, props.limit]}
        />
      </div>
    </div>
  );
};

export default PokemonPage;
