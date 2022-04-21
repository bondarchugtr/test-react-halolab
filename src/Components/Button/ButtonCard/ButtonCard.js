import { useState } from "react";
import s from "./ButtonCard.module.scss";
import Modal from "../../Modal/Modal";
function ButtonCard() {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button
        type="button"
        className={s.buttoncard}
        onClick={toggleModal}
        test={modalOpen}
      >
        Buy
      </button>
      {modalOpen && <Modal />}
    </>
  );
}

export default ButtonCard;
