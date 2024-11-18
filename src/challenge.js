import { useState } from "react";
import "./styles.css";

export default function counterApp() {
  return (
    <div>
      <main className="countercard">
        <button>-</button>
        <button>+</button>
      </main>
    </div>
  );
}
