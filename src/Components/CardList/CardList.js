import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Api from "../Api/ApiService";
import CardItems from "../CardItems/CardItems";
import ButtonPage from "../Button/ButtonPage/ButtonPage";
import s from "./CardList.module.scss";
import cont from "../../style/base.module.scss";
function CardList() {
  const [cardArr, setCardArr] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    Api().then((response) => setCardArr([...cardArr, ...response]));
  }, []);

  const openModal = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={cont.container}>
      <ul className={s.list}>
        {cardArr.map((card) => (
          <CardItems
            key={nanoid()}
            name={card.name}
            category={card.category}
            price={card.price}
          />
        ))}
      </ul>
      <ButtonPage onClick={openModal} />
    </div>
  );
}

export default CardList;
