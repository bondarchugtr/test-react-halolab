import { useState } from "react";
import s from "./ButtonCard.module.scss";
function ButtonCard({ onClick }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (el) => {
    setModalOpen(!modalOpen);
    onClick();
  };

  return (
    <>
      <button type="button" className={s.buttoncard} onClick={toggleModal}>
        Buy
      </button>
    </>
  );
}

export default ButtonCard;
