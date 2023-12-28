import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  let color = "#fff";
  function handleSubract() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleAdd() {
    setCount(count + 1);
  }

  if (count > 0) {
    color = "lightGreen";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }
  return (
    <section className="counter-sec">
      <div className="counter">
        <div className="top">
          <h1 className="heading">React Counter App</h1>
          <p className="count" style={{ color: color }}>
            {count}
          </p>
        </div>
        <div className="buttons">
          <button onClick={handleSubract} style={{ color: "red" }} > - Subract</button>
          <button onClick={handleReset}> ! Reset</button>
          <button onClick={handleAdd} style={{ color: "green" }}> + Add </button>
        </div>
      </div>
    </section>
  );
}
