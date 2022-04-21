import { useState } from "react";
import s from "./ButtonCard.module.scss";
import Modal from "../../Modal/Modal";
import Form from "../../Forma/Forma";
function ButtonCard() {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <button type="button" className={s.buttoncard} onClick={toggleModal}>
        Buy
      </button>
      {modalOpen && (
        <Modal onClose={toggleModal}>
          <Form />
        </Modal>
      )}
    </>
  );
}

export default ButtonCard;
