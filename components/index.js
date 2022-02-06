import React from "react";
import { gql, useQuery } from "@apollo/client";
import PokemonPage from "./PokemonPage";
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
      <h1 style={{ color: "white", margin: "auto", textAlign: "center" }}>
        Loading...
      </h1>
    );
  if (error) return `Error! ${error.message}`;

  //console.log("Response from server", data);

  return (
    <div>
      <PokemonPage data={data} limit={gqlVariables.limit} />
    </div>
  );
};

export default Content;
