import { memo, useState } from "react";

const LESSONS = [
  "State Temellleri",
  "Effektfundamente",
  "Leistungsoptimierung",
  "globalem Zustand mit Context",
  "Benutzerdefinierte Hooks",
];

const LessonsList = memo(function LessonsList({ filter }) {
  console.log("LessonsList wurde gerendert.");

  const visibleLessons = LESSONS.filter((lesson) =>
    lesson.toLowerCase().includes(filter.toLowerCase()),
  );
console.log('visibleLessons :>> ', visibleLessons);
  return (
    <ul>
      {visibleLessons.length === 0 ? (
        <li>Ergebnis nicht gefunden.</li>
      ) : (
        visibleLessons.map((lesson) => <li key={lesson}>{lesson}</li>)
      )}
    </ul>
  );
});

function MemoizedListDemo() {
  const [filter, setFilter] = useState("");
  const [clicks, setClicks] = useState(0);

  const handleOtherClick = () => {
    setClicks((prev) => prev + 1);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <section className="gray-box">
      <h4>Beispiel für eine Liste mit React.memo</h4>
      <p>
        In diesem Beispiel wurde die Listenkomponente mit{" "}
        <code>React.memo</code> umhüllt. Solange sich der Filter nicht ändert,
        führen die obigen irrelevanten Button-Klicks nicht zu einem erneuten
        Rendern der Listenkomponente.
      </p>

      <button type="button" onClick={handleOtherClick}>
        Unbeteiligter Knopf ({clicks})
      </button> {''}

      <div>
        <label htmlFor="">
          Suche in der Kursliste.:{" "}
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="orn: state, effect,..."
          />
        </label>
      </div>
      <LessonsList filter={filter} />
      <p style={{ fontSize: '0.9rem' }}>
        Tarayıcı konsolunda <code>LessonsList render</code> log&apos;larını takip edin.
        Filtre değişmediği sürece, sadece alakasız butona basmak listeyi yeniden
        render etmeyecektir.
      </p>
    </section>
  );
}

export default MemoizedListDemo;
