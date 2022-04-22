import { useEffect } from "react";
import { createPortal } from "react-dom";
import Form from "../Forma/Forma";
import s from "./Modal.module.scss";
import close from "../../img/svg/sprite.svg";

const modalContainer = document.querySelector("#modal-root");

function Modal({ onClose, modalOpen, name, category, price }) {
  useEffect(() => {
    document.body.appendChild(modalContainer);
    window.addEventListener("keydown", closeKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", closeKeyDown);
      document.body.style.overflow = "scroll";
    };
  });

  const closeKeyDown = (el) => {
    if (el.code === "Escape") {
      onClose();
    }
  };
  const closeBackDrop = (el) => {
    if (el.target === el.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={modalOpen ? s.overlay + " " + s.is__open : s.overlay}
      onClick={closeBackDrop}
    >
      <div className={modalOpen ? s.modal + " " + s.is__open : s.modal}>
        <button
          type="button"
          data-action="close-modal"
          className={s.modal__close__button}
          aria-label="close"
          onClick={closeBackDrop}
        >
          <svg className={s.close__icon} onClick={closeBackDrop}>
            <use href={close + "#icon-closeblack"} onClick={closeBackDrop} />
          </svg>
        </button>

        <div className={s.main__modal}>
          <p className={s.card__category}>{category}</p>
          <h3 className={s.card__title}>{name}</h3>
          <p className={s.card__price}>
            <span className={s.price__mark}>$</span>
            {price}
          </p>
          <Form />
        </div>
      </div>
    </div>,

    modalContainer
  );
}
export default Modal;
