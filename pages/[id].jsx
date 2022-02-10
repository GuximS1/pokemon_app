import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Image } from "antd";
import classes from "./PokemonDetails.module.scss";
function PokemonDetails() {
  const router = useRouter().query;
  const [data, setData] = useState({});
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + router.id + "/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        fetch(data.abilities[0].ability.url)
          .then((response) => response.json())
          .then((data) => setAbility(data.effect_entries[1].effect));
      });
  }, [router.id]);

  const frontGif =
    data.sprites?.versions["generation-v"]["black-white"].animated
      .front_default;
  const backGif =
    data.sprites?.versions["generation-v"]["black-white"].animated.back_default;
  const frontShiny =
    data.sprites?.versions["generation-v"]["black-white"].animated.front_shiny;
  const backShiny =
    data.sprites?.versions["generation-v"]["black-white"].animated.back_shiny;
  console.log(data);
  return (
    <div>
      <div className={classes.content}>
        <h1 className={classes.title}>{data.name}</h1>
        <div className={classes.imgs}>
          <Image
            alt="pokemon"
            src={data.sprites?.front_default}
            preview={false}
            width={300}
            height={300}
          />
          <Image
            alt="pokemon"
            src={data.sprites?.back_default}
            preview={false}
            width={300}
            height={300}
          />
        </div>
      </div>
      <p className={classes.description}>
        This pokemon has {data.abilities?.length} abilities. It has a{" "}
        {data.base_experience} base experience. His weight is {data.weight}gr.
        and his height is {data.height}cm . It has {data.moves?.length} moves.
        <br />
        {ability}
        <br />
      </p>
      <div className={classes.gif} style={{ textAlign: "center" }}>
        <Image alt="gif" src={frontGif} height={100} width={100} />
        <Image alt="gif" src={backGif} height={100} width={100} />
        <Image alt="gif" src={frontShiny} height={100} width={100} />
        <Image alt="gif" src={backShiny} height={100} width={100} />
      </div>
    </div>
  );
}

export default PokemonDetails;
