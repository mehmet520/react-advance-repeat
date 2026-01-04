import { useEffect, useState } from "react";

const mockLessons = [
  { id: 1, title: "UseEffect-Grundlagen" },
  { id: 2, title: "Datenabrufbeispiele" },
  { id: 3, title: "Reinigungsfunktionen (CleanUp)" },
];

function FetchSimulation() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);
//   const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    // if (!shouldFetch) return;
    if (status !== 'loading') return;

    let cancelled = false;
    

    const timeoutId = setTimeout(() => {
      if (cancelled) return;

      // Lassen Sie uns einfach 20 % Fehler und 80 % Erfolg simulieren.
      const shouldFail = Math.random() < 0.2;

      if (shouldFail) {
        setStatus("error");
        setError("Beim Laden der Daten ist ein Fehler aufgetreten.");
        return;
      }

      setStatus("success");
      setLessons(mockLessons);
    }, 1000);

    // Wenn der Cleanup-Effekt erneut ausgeführt wird oder die Komponente unmontiert wird.
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [status]);

  function handleClick() {
    // Bei jedem Klick erneuter Fetch-Versuch.
    setStatus("loading");
    setError(null);
    // setShouldFetch(true);
  }
  return (
    <section className="gray-box">
      <h4>Datenabruf-Simulation</h4>
      <p>
        In diesem Beispiel simulieren wir das Abrufen von falschen Daten
        innerhalb von useEffect. Wir verwalten die Lade-, Erfolgs- und
        Fehlerzustände.
      </p>
      <button
        type="button"
        onClick={handleClick}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Wird geladen...." : "Daten hochladen"}
      </button>

      {status === "idle" && <p>Die Daten konnten noch nicht geladen werden.</p>}

      {status === "loading" && <p>Die Daten werden geladen...</p>}

      {status === "error" && (
        <p style={{ color: "red" }}>
          Hata: {error}{" "}
          <span style={{ fontSize: ".9rem" }}>
            (Drücken Sie die Taste, um es erneut zu versuchen.)
          </span>
        </p>
      )}

      {status === 'success' && (
        <ul style={{marginTop:'.5rem'}}>
            {lessons.map((lesson)=>(
                <li key={lesson.id}>{lesson.title}</li>
            ))}
        </ul>
      )}
    </section>
  );
}

export default FetchSimulation;
