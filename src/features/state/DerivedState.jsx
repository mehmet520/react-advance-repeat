import { useState } from "react";

const initialLessons = [
  { id: 1, title: "useState-Grundlagen", level: "Anfängerniveau" },
  { id: 2, title: "Formzustandsverwaltung", level: "Anfangerniveau" },
  { id: 3, title: "Derived State ve Lifting State Up", level: "Mittelstufe" },
  { id: 4, title: "Datenabruf mit useEffect", level: "Mittelstufe" },
  { id: 5, title: "Leistungsoptimierung", level: "Fortgeschrittenes Niveau" },
];

function DerivedState() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.toLowerCase().trim();

  // Abgeleitete Zustand: nicht der filteredLessons-Zustand.
  const filteredLessons = initialLessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(normalizedQuery)
  );

  const hasQuery = normalizedQuery !== "";

  return (
    <section>
      <h4>Abgeleiteter Zustand (Derived State)</h4>
      <p>
        Hier halten wir nur den Suchtext im State. Die gefilterte Liste wird bei
        jedem Rendern aus diesem Suchtext abgeleitet. Wir speichern die Liste
        nicht als eigenen State.
      </p>{" "}
      <div>
        <label htmlFor="">
          Suche im Unterricht.:{" "}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Beispiel: state, effect..."
          />
        </label>
      </div>
      <ul>
        {!hasQuery ? (
          <li>Bitte geben Sie einen Suchbegriff ein.</li>
        ) : filteredLessons.length === 0 ? (
          <li>Das Ergebnis konnte nicht gefunden werden.</li>
        ) : (
          filteredLessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title} <em>({lesson.level})</em>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default DerivedState;
