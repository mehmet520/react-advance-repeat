import { useTheme } from "./ThemeContext";

function DeepChild() {
  const { theme } = useTheme();

  const style =
    theme === "light"
      ? {
          padding: ".5rem",
          borderRadious: ".5rem",
          border: "1px solid #cbd5f5",
          backgroundColor: "#eff6ff",
        }
      : {
          padding: ".5rem",
          border:'1px solid #4b5563',
          borderRadious:'.7rem',
          backgroundColor:'#020617',
          color:'#eff6ff'
        };

  return (
    <div style={style}>
      <strong>DeepChild-Komponente</strong>
      <p>
        Diese Komponente ist einige Ebenen tiefer. Sie liest den Themenwert
        direkt aus dem Kontext, ohne Props zu erhalten.
      </p>
      <p>
        Aktuelles Thema: <code style={{ color: "red" }}>{theme}</code>
      </p>
    </div>
  );
}

function MiddleLayer({ children }) {
  return (
    <div style={{ padding: ".5rem" }}>
      <h4 style={{color:'green'}}>MiddleLayer-Komponente (rendert nur ihre Kinder).</h4>
      {children}
    </div>
  );
}

function DeepTree() {
  return (
    <section className="gray-box">
    <h3>DeepTree Component</h3>
      <h4>Beispiel für einen tiefen Baum (kein Prop Drilling)</h4>
      <p>
        Hier gibt es drei Ebenenkomponenten: DeepTree → MiddleLayer → DeepChild.
        Nur die unterste Komponente verwendet den Themenwert; die
        dazwischenliegenden müssen keine Props übergeben.
      </p>
      <MiddleLayer>
        <DeepChild />
      </MiddleLayer>
    </section>
  );
}

export default DeepTree;
