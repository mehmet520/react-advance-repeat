import { memo, useCallback, useState } from "react";

const IncrementButton = memo(function IncrementButton({ onIncrement }) {
  console.log("IncrementButton wurde gerendert");

  return (
    <button type="button" onClick={onIncrement}>
      Zähler erhöhen
    </button>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const containerStyle =
    theme === "light"
      ? {
          padding: ".5rem",
          borderRadious: "12px",
          border: "1px solid #e5e5e5",
          backgroundColor: "#f9fafb",
        }
      : {
          padding: ".5rem",
          borderRadious: "12px",
          border: "1px solid #1f2937",
          backgroundColor: "#111827",
          color: "white",
        };

  return (
    <section className="gray-box">
      <h4>Stabiler Callback mit useCallback</h4>
      <p>
        Hier ist die IncrementButton-Komponente (Schaltflächenkomponente) mit{" "}
        <code>React.memo</code> umschlossen. Wenn wir useCallback nicht
        verwenden, wird bei jeder Wiederholung eine neue Funktion erstellt und
        die IncrementButton (Schaltfläche) wird unnötig neu gerendert.
      </p>

      <div style={containerStyle}>
        <p>Aktif Tema: {theme === "light" ? "Licht" : "dunkel"}</p>
        <p>Sayim: {count}</p>
        <div>
          <IncrementButton onIncrement={handleIncrement} />
          <button type="button" onClick={handleTheme}>
            Thema wechseln
          </button>
        </div>
      </div>
      <p style={{ fontSize: "0.9rem" }}>
        Verfolgen Sie das Log <code>IncrementButton render</code> in der
        Konsole. Das Log sollte nur sichtbar sein, wenn Sie den Zähler erhöhen;
        der Button sollte beim Ändern des Themas nicht erneut gerendert werden.
      </p>
    </section>
  );
}

export default UseCallbackDemo;
