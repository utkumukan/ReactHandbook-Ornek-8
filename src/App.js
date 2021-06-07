import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const Child = (props) => {
  const { count } = props;
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      console.log("count değerinin update olduğu durumlarda çalışırım");
    } else {
      didMount.current = true;
    }
  }, [count]);

  return (
    <div className="Child">
      <h2>{count}</h2>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={handleMinus}>-</button>
      <Child count={count} />
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default App;
