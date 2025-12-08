import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Fortgeschrittene Arbeitsbereich</h1>
        <p>
          In diesem Projekt werden wir Schritt für Schritt fortgeschrittene
          React-Themen praxisnah bearbeiten.
        </p>
      </header>

      <main>
        <section>
          <p>
            Derzeit haben wir nur das Grundgerüst erstellt. In den nächsten
            Schritten werden wir Themen wie Routing, globale Zustandsverwaltung,
            Datenabruf und Leistungsoptimierung hinzufügen.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
