import { useState } from "react";
import "./styles.css";

export default function counterApp() {
  const [date, setDate] = useState(new Date());
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const HandleClickForward = () => {
    setCounter((step) => step + 1);
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + step);
    setDate(newDate);
  };
  const HandleClickBack = () => {
    setCounter((step) => step - 1);
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - step);
    setDate(newDate);
  };
  const incrementDate = () => {};
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
        <button className="btn" onClick={HandleClickBack}>
          -
        </button>
        <p>Count : {counter} </p>
        <button className="btn" onClick={HandleClickForward}>
          +
        </button>
      </main>
      <p>Today is {date.toDateString()}</p>
    </div>
  );
}
