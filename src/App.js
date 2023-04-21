import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
  };

  const handleEqual = () => {
    const expression = `${number} ${operator}`;
    setResult(eval(expression));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Number"
        value={number}
        onChange={handleNumber}
      />
      <select value={operator} onChange={handleOperator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={handleEqual}>Equal</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;