import React from "react";
import classes from "./footer.module.scss";
import Link from "next/link";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <p className={classes.footerContent}>
        © Copyright Pokeapi and contributors 2022.
      </p>
      <div className={classes.icons}>
        <Link href="https://www.instagram.com/">
          <a>
            <InstagramOutlined style={{ fontSize: "2.3rem", color: "white" }} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/">
          <a>
            <FacebookOutlined style={{ fontSize: "2.3rem", color: "white" }} />
          </a>
        </Link>
        <Link href="https://www.twitter.com/">
          <a>
            <TwitterOutlined style={{ fontSize: "2.3rem", color: "white" }} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/">
          <a>
            <LinkedinOutlined style={{ fontSize: "2.3rem", color: "white" }} />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
