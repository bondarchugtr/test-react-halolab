import { useState } from "react";
import ButtonCard from "../Button/ButtonCard/ButtonCard";
import s from "./CardItems.module.scss";
import Modal from "../Modal/Modal";

function CardItems({ name, category, price }) {
  const [isActive, setIsActive] = useState(false);

  const openModal = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <li className={s.item}>
        <p className={s.category}>{category}</p>

        <h3 className={s.title}>{name}</h3>

        <div className={s.price}>
          <p className={s.price__value}>
            <span className={s.price__mark}>$</span>
            {price}
          </p>
          {isActive && (
            <Modal
              name={name}
              category={category}
              price={price}
              onClose={openModal}
            />
          )}
          <ButtonCard onClick={openModal} />
        </div>
      </li>
    </>
  );
}
export default CardItems;
