import { useState } from "react";
import "./App.css";
import Demo from "./Example";

function App() {
  const [count, setCount] = useState(0);

  const counthandler = () => {
    setCount(count + 1);
  };

  const countresthandler = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Counter</h2>
      <h2>Count: {count}</h2>
      <button onClick={counthandler}>Click Me!</button>
      <button className="kg-button" onClick={countresthandler}>
        Reset
      </button>
      {/* <Demo /> */}
    </>
  );
}

export default App;
