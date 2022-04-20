import CardList from "./Components/CardList/CardList";
import "modern-normalize/modern-normalize.css";
import cont from "./style/base.module.scss";
import s from "./App.module.scss";
function App() {
  return (
    <section className={s.section__card}>
      <CardList />
    </section>
  );
}

export default App;
