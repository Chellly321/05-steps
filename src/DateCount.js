import { useState } from "react";
import React from "react";

function DateCount() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("October 27 2023");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="count-container">
        <div className="style">
          <button onClick={() => setStep((c) => c - 1)}>-</button>
          <div>Step: {step}</div>
          <button onClick={() => setStep((c) => c + 1)}>+</button>
        </div>

        <div className="style">
          <button onClick={() => setCount((c) => c - 1)}>-</button>
          <div>Count: {count}</div>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}

export default DateCount;
