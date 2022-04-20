import ButtonCard from "../Button/ButtonCard";
import s from "./CardItems.module.scss";
function CardItems({ name, category, price }) {
  return (
    <>
      <li className={s.item}>
        <div className={""}>{name}</div>
        <div className={""}>{category}</div>
        <div className={""}>{price}</div>
        <ButtonCard />
      </li>
    </>
  );
}
export default CardItems;
