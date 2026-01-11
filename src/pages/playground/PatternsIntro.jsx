import HOCDemo from "../../features/patterns/hoc/HOCDemo";
import Mouse from "../../features/patterns/hoc/mouse-tracker/Mouse";
import DataFercherShow from "../../features/patterns/render-props/data-fetcher/DataFetcherShow";
import RenderPropsDemo from "../../features/patterns/render-props/RenderPropsDemo";

// src/pages/playground/PatternsIntro.jsx
function PatternsIntro() {
  return (
    <section className="app-section">
      <h3>Fortgeschrittene Komponentenmuster(Patterns)</h3>
      <p>
        Auf dieser Seite werden wir Higher-Order Components (HOCs), Render Props
        und ähnliche fortgeschrittene Komponentenmuster untersuchen. Das Ziel
        wird sein, alternative Wege zu sehen, um dasselbe Verhalten zwischen
        verschiedenen Komponenten zu teilen.
      </p>
      <p>
        Wir werden kleine Beispiele, die diese Muster im Ordner
        src/features/patterns zeigen, vorbereiten.
      </p>
      <p>
        In den folgenden Beispielen werden wir zuerst sehen, wie wir eine
        Komponente einfach mit einem HOC umhüllen können, und anschließend, wie
        wir das UI mithilfe von Render Props von einer externen Funktion
        definieren können.
      </p>
      <DataFercherShow />
      <RenderPropsDemo />
      {/* <Mouse /> */}
      <HOCDemo />
    </section>
  );
}

export default PatternsIntro;
