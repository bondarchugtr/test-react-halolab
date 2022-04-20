import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Api from "../Api/ApiService";
import CardItems from "../CardItems/CardItems";
import ButtonPage from "../Button/ButtonPage";
import s from "./CardList.module.scss";
function CardList() {
  const [cardArr, setCardArr] = useState([]);
  useEffect(() => {
    Api().then((response) => setCardArr([...cardArr, ...response]));
  }, []);

  return (
    <>
      <ul className={s.list}>
        {cardArr.map((card) => (
          <CardItems
            key={nanoid()}
            name={card.name}
            category={card.category}
            price={card.price}
            // onClick={() => imgModalWriting(img.largeImageURL)}
          />
        ))}
      </ul>
      <ButtonPage />
    </>
  );
}

export default CardList;
