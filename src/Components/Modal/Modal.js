import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";
const modalContainer = document.querySelector("#modal-root");

function Modal({ onClose, modalOpen, children }) {
  console.log(modalOpen);
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
      //   className={s.overlay}
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
          X
        </button>
        <div className={s.main__modal}>{children}</div>
      </div>
    </div>,

    modalContainer
  );
}
export default Modal;
