import React from "react";
import "antd/dist/antd.css";
import classes from "../components/Card.module.scss";
import { Card } from "antd";
import { useRouter } from "next/router";

function PokemonCard(props) {
  const { Meta } = Card;
  const router = useRouter();
  return (
    <Card
      className={classes["cards"]}
      hoverable
      style={{ width: 240 }}
      // eslint-disable-next-line
      cover={<img alt="example" src={props.imgurl} />}
      onClick={() => {
        router.push({
          pathname: "[id]",
          query: {
            id: props.id,
          },
        });
      }}
    >
      <Meta title={props.name} />
    </Card>
  );
}

export default PokemonCard;
