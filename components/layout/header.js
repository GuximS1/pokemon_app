import React from "react";
import classes from "./header.module.scss";
import Link from "next/link";
const Header = () => {
  return (
    <header className={classes["header-bar"]}>
      <h1 className={classes["logo"]}>
        Pokemon<span>🦕</span>
      </h1>
      <nav className={classes["slider-menu"]}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
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
