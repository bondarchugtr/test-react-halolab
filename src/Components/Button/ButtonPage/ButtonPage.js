import { useState, useEffect } from "react";
import Api from "../../Api/ApiService";
import Modal from "../../Modal/Modal.js";
import s from "../ButtonPage/ButtonPage.module.scss";
function ButtonPage() {
  const [isActive, setIsActive] = useState(false);
  const [cardArrMim, setCardArrMin] = useState([]);
  const [minPrice, setMinPrice] = useState([]);
  useEffect(() => {
    Api().then((response) => setCardArrMin([...cardArrMim, ...response]));
  }, []);

  const minNumber = () => {
    let min = cardArrMim.sort((a, b) => a.price - b.price);
    setMinPrice(min[0]);
  };

  const openModal = () => {
    setIsActive(!isActive);
    minNumber();
  };

  return (
    <div className={s.block}>
      <button type="button" className={s.button__page} onClick={openModal}>
        Buy cheapest
      </button>
      {isActive && (
        <Modal
          name={minPrice.name}
          category={minPrice.category}
          price={minPrice.price}
          onClose={openModal}
        />
      )}
    </div>
  );
}

export default ButtonPage;
