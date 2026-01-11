import { useState, useEffect } from "react";

function MouseTracker({ render }) {
    
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => removeEventListener("mousemove", handleMouseMove);
  }, []);

  return render(mousePosition);
}

export default function RenderPropsDemo() {
  return (
    <section className="gray-box">
      <h4>Render Props Demo</h4>
      <p>
        Die MouseTracker-Komponente verfolgt die Position der Maus, entscheidet
        jedoch nicht selbst, wie sie angezeigt wird. Stattdessen erhält sie das
        UI von außen über Render Props (Render-Funktion).
      </p>
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: ".75rem",
          padding: ".5rem",
        //   minHeight: 80,
          margin: "0 1.5rem",
        }}
      >
        <MouseTracker
          render={({ x, y }) => (
            <p>
              Mausposition: <strong>{x}</strong>, <strong>{y}</strong>
            </p>
          )}
        />
      </div>
    </section>
  );
}
