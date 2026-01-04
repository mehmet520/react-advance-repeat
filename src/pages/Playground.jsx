import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Playground() {
  return (
    <section className="app-section">
      <h2>Playground</h2>
      <p>
        In diesem Abschnitt werden wir fortgeschrittene React-Beispiele,
        Experimente und kleine Szenarien Schritt für Schritt umsetzen.
      </p>
      <nav
        className=""
        style={{
          display: "flex",
          gap: "1rem",
          margin: "1rem 0",
          flexWrap: "wrap",
        }}
      >
        <Link to="">Allgemeine-Übersicht</Link>
        <Link to="state">Zustandsmanagement</Link>
        <Link to="effects">Nebenwirkungen</Link>
        <Link to="performance">Leistung</Link>
        <Link to="context">Context</Link>
        <Link to="reducer">useReducer</Link>
        <Link to="hooks">Custom Hooks</Link>
        <Link to="data-fetching">Data Fetching</Link>
        <Link to="forms">Form Yonetimi</Link>
        <Link to="patterns">Patterns</Link>
      </nav>
      <div
        style={{
          padding: "6pt",
          backgroundColor: "#aba",
          borderRadius: "5pt",
        }}
      >
        <Outlet />
      </div>
    </section>
  );
}

export default Playground;
