import React from "react";
import classes from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import pokemonLogo from "../../public/2560px-International_Pokémon_logo.svg.png";
const Header = () => {
  return (
    <header className={classes["header-bar"]}>
      <h1 className={classes["logo"]}>
        <Image alt="logo" src={pokemonLogo} width={269} height={100} />
      </h1>
      <nav className={classes["slider-menu"]}>
        <Link href="/">
          <a className={classes.link} style={{ textDecoration: "none" }}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className={classes.link} style={{ textDecoration: "none" }}>
            About
          </a>
        </Link>
      </nav>
      <Link href="https://graphql-pokeapi.vercel.app/">
        <a>
          <button className={classes["button"]}>Used API</button>
        </a>
      </Link>
    </header>
  );
};

export default Header;
