import React from "react";
import { gql, useQuery } from "@apollo/client";
import PokemonPage from "./PokemonPage";
import Loading from "./Loading";
const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
        id
      }
    }
  }
`;

const gqlVariables = {
  limit: 500,
  offset: 0,
};
const Content = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading)
    return (
      <h1 style={{ textAlign: "center", margin: "20px" }}>
        <Loading />
      </h1>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <PokemonPage data={data} limit={gqlVariables.limit} />
    </div>
  );
};

export default Content;
