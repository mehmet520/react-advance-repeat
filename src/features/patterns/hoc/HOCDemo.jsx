import { useState } from "react";

// Höhere Ordnungskomponente: Eine Komponente nimmt und gibt eine neue Komponente zurück
// eslint-disable-next-line no-unused-vars
function withBorder(WrappedComponent) {
  return function ComponentWithBorder(props) {
    return (
      <div
        style={{
          border: "2px dashed #4b5563",
          borderRadius: 8,
          padding: 12,
          marginTop: 12,
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function BaseCard({ title, children }) {
  return (
    <div>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  );
}

const CardWithBorder = withBorder(BaseCard);

export default function HOCDemo() {
  const [clicks, setClicks] = useState(0);
  return (
    <section className="gray-box">
      <h4>HOC (Higher-Order Component) Beispiel</h4>
      <p>
        Hier umhüllen wir die <code>BaseCard</code>-Komponente mit einem HOC,
        das einen zusätzlichen Rahmen und Stil hinzufügt. An der BaseCard selbst
        nehmen wir keine Änderungen vor.
      </p>
      <button
        type="button"
        onClick={() => setClicks((prevClick) => prevClick + 1)}
      >
        Klickanzahl der Karten:{clicks}
      </button>
      <CardWithBorder title="Mit HOC umwickelte Karte">
        Diese Karte erhält durch den withBorder HOC ein zusätzliches Aussehen.{" "}
      </CardWithBorder>
    </section>
  );
}
