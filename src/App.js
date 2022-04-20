import CardList from "./Components/CardList/CardList";
import "modern-normalize/modern-normalize.css";
import cont from "./style/base.module.scss";
function App() {
  return (
    <div className={cont.container}>
      <CardList />
    </div>
  );
}

export default App;
