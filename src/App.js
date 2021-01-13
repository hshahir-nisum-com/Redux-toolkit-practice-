import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/slicers/counterSlicer";
function App() {
  let countedValue = useSelector((state)=>state.count)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter App using redux toolkit</h1>
      <button onClick={() => {dispatch(actions.incr())}}>Increment</button>
      <button onClick={() => {dispatch(actions.decr())}}>Decrement</button>
      <div>counter Value : {countedValue} </div>
    </div>
  );
}

export default App;
