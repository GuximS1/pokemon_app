import React, { useState } from "react";
import Card from "./Card";
import { Pagination } from "antd";
import classes from "./PokemonPage.module.scss";
const PokemonPage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const pokemonsVisited = (pageNumber - 1) * usersPerPage;
  console.log(props.data.pokemons);
  console.log(props.data.pokemons.results);

  const changePage = (page, pageSize) => {
    setPageNumber(page);
    setUsersPerPage(pageSize);
  };
  return (
    <div>
      {props.data.pokemons.results
        .slice(pokemonsVisited, pokemonsVisited + usersPerPage)
        .map((item, index) => {
          return (
            <Card
              key={item.name}
              id={(pageNumber - 1) * usersPerPage + index + 1}
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
