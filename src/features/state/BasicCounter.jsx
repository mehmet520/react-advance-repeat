import { useState } from "react";

function BasicCounter() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }
  
  function handleReset() {
    setCount(0);
  }

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  return (
    <section
      style={{
        background: "#aaa",
        border: "1px solid #666",
        borderRadius: "9pt",
        padding: "6pt",
      }}
    >
      <h4 style={{ margin: "2pt 0" }}>Einfacher Zähler</h4>
      <p>`Counter: {count}`</p>
      <div style={{display:'flex', gap:'1.5rem'}}>
        <button type="button" onClick={handleDecrement}>
          Verringern
        </button>
        <button type="button" onClick={handleReset}>
          Zurücksetzen
        </button>
        <button type="button" onClick={handleIncrement}>
          Erhöhen
        </button>
      </div>
    </section>
  );
}

export default BasicCounter;
