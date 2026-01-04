import { useMemo, useState } from "react";

function slowDouble(number) {
  const start = performance.now();
  console.log("slowDouble hat funktioniert. ", start);

  // Eine gefälschte teure Operation, die den CPU etwa 300 ms beschäftigt.
  while (performance.now() - start < 300) {
    // leere Schleife
  }

  return number * 2;
}

function ExpensiveCalculationDemo() {
  const [value, setValue] = useState(10);
  const [unrelated, setUnrelated] = useState(0);

  const doubled = useMemo(() => slowDouble(value), [value]);

  const handleChange = (event) => {
    const next = Number(event.target.value) || 0;
    setValue(next);
  };

  const handleBumpUnrelated = () => {
    setUnrelated((prev) => prev + 1);
  };
  return (
    <section className="gray-box">
      <h4>Pseudocode mit useMemo für teure Berechnungen</h4>
      <p>
        Hier simuliert die Funktion <code>slowDouble</code> einen teuren
        Prozess. Dank useMemo wird sie nur wiederholt ausgeführt, wenn sich{" "}
        <code>value</code> ändert.
      </p>

      <div>
        <label htmlFor="">
          Deger:{" "}
          <input
            type="number"
            value={value}
            onChange={handleChange}
            style={{ width: "80px" }}
          />
        </label>
      </div>

      <p>Sonuc (2x): {doubled}</p>

      <button type="button" onClick={handleBumpUnrelated}>
        Alakasiz state artir ({unrelated})
      </button>
      <p style={{ fontSize: ".9rem" }}>
        Im Konsolen sollten Sie das Log `<code>slowDouble arbeitete</code>` nur
        sehen, wenn sich der Wert ändert; nicht bei irrelevanten
        Zustandsänderungen.
      </p>
    </section>
  );
}

export default ExpensiveCalculationDemo;
