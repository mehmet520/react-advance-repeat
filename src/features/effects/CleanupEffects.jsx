import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Die Clean-Komponente funktioniert, wenn sie unmounted wird oder der Effekt erneut ausgelöst wird.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>Verstrichene Zeit: {seconds} Sekunde</p>;
}

function CleanupEffect() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <section
      style={{
        backgroundColor: "#aaaaa5",
        border: "1px solid #777",
        borderRadius: "5px",
        padding: "0 5px",
      }}
    >
      <h4>Cleanup mit Timer Beispiel</h4>
      <p>
        Timer bileşeni göründüğünde bir interval başlatılır, gizlendiğinde ise
        interval temizlenir. Böylece gereksiz çalışan zamanlayıcılardan kaçınmış
        oluruz. Wenn die Timer-Komponente angezeigt wird, wird ein Intervall
        gestartet, und wenn sie ausgeblendet wird, wird das Intervall gelöscht.
        So vermeiden wir unnötig laufende Timer.
      </p>
      <button type="button" onClick={toggleVisible}>
        {visible ? "Timer verbergen" : "Timer anzeigen"}
      </button>

      <div>
        {visible ? <Timer /> : <p>Der Timer ist zurzeit nicht sichtbar.</p>}
      </div>
    </section>
  );
}

export default CleanupEffect;
