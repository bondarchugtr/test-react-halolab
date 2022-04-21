import { useState } from "react";
import s from "../ButtonPage/ButtonPage.module.scss";
function ButtonPage() {
  const [filterPrice, setFilterPrice] = useState(false);
  console.log(filterPrice);
  const toggleFilterPrice = () => {
    setFilterPrice(!filterPrice);
  };
  return (
    <div className={s.block}>
      <button
        type="button"
        className={s.button__page}
        onClick={toggleFilterPrice}
      >
        Buy cheapest
      </button>
    </div>
  );
}

export default ButtonPage;
