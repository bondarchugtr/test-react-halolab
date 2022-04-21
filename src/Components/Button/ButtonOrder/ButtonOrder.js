import s from "./ButtonOrder.module.scss";
function ButtonOrder() {
  return (
    <div className={s.order}>
      <button type="submit" className={s.button__order}>
        Order
      </button>
    </div>
  );
}

export default ButtonOrder;
