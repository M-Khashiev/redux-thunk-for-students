import { fetchCustomers } from "./asyncAction/customers";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);


  return (
    <div className="app">
      <button
        className="getUsersBtn"
        onClick={() => dispatch(fetchCustomers())}
      >
        Получить пользователей
      </button>
      {users.map((el, i) => {
        console.log(el);
        return <h1 key={i}>{el.name}</h1>;
      })}
    </div>
  );
}

export default App;
