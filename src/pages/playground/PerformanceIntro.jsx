import ExpensiveCalculationDemo from "../../features/performance/ExpensiveCalculationDemo";
import MemoizedListDemo from "../../features/performance/MemoizedListDemo";
import UseCallbackDemo from "../../features/performance/UseCallbackMemo";

function PerformanceIntro() {
  return (
    <section>
      <h3>Einführung in die Leistungsoptimierung</h3>
      <p>
        In diesem Modul werden wir Techniken zur Memoization, zur Reduzierung
        unnötiger Renderings und zur Messung/Verbesserung von React-Anwendungen
        betrachten.
      </p>
      <p>
        React-Komponenten sind im Allgemeinen ziemlich schnell, aber in einigen
        Fällen können teure Berechnungen, große Listen oder unnötige Renderings
        die Anwendung verlangsamen.
      </p>

      <p>
        Auf dieser Seite werden Sie grundlegende Beispiele für
        Performance-Optimierungen mit <code>useMemo</code>,{" "}
        <code>React.memo</code> und <code>useCallback</code> sehen.
      </p>
      <UseCallbackDemo />
      <MemoizedListDemo />
      <ExpensiveCalculationDemo />
    </section>
  );
}

export default PerformanceIntro;
