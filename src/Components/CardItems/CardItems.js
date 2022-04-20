import ButtonCard from "../Button/ButtonCard/ButtonCard";
import s from "./CardItems.module.scss";
function CardItems({ name, category, price }) {
  return (
    <>
      <li className={s.item}>
        <div className={s.category}>
          <p className={s.category__text}>{category}</p>
        </div>
        <div className={s.name}>
          <p className={s.name__text}>{name}</p>
        </div>
        <div className={s.price}>
          <p className={s.price__text}>
            <span className={s.price__mark}>$</span>
            {price}
          </p>
          <ButtonCard />
        </div>
      </li>
    </>
  );
}
export default CardItems;
