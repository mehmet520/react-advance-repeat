import { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Effektzähler: ${count}`;
  }, [count]);

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  return (
    <section className="gray-box">
      <h4>Grundlegendes useEffect-Beispiel</h4>
      <p>
        Dieser Zähler wird bei jeder Änderung aktualisiert. Sie können den
        Zähler im Tab-Titel sehen.
      </p>{" "}
      <p>Aktueller Wert: {count}</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button type="button" onClick={handleDecrement}>
          Verringern
        </button>
        <button type="button" onClick={handleIncrement}>
          Erhöhen
        </button>
      </div>
    </section>
  );
}

export default BasicEffect;
