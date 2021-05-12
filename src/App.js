import './App.css';
import React, { useState } from "react";

const App = () => {

  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}

export default App;
