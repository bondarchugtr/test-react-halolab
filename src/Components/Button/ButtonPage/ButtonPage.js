import s from "../ButtonPage/ButtonPage.module.scss";
function ButtonPage() {
  return (
    <div className={s.block}>
      <button type="button" className={s.buttonpage}>
        Buy cheapest
      </button>
    </div>
  );
}

export default ButtonPage;
