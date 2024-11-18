import { useState } from "react";
import "./styles.css";

export default function counterApp() {
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <main className="countercard">
        <button className="btn" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <p>Step : {step} </p>
        <button className="btn" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
        <br />
        <button className="btn" onClick={() => setCounter((s) => s - 1)}>
          -
        </button>
        <p>Count : {counter} </p>
        <button className="btn" onClick={() => setCounter((s) => s + 1)}>
          +
        </button>
      </main>
      <p>{date.toDateString()}</p>
    </div>
  );
}
