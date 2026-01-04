import { useState } from "react";

const COLORS = ["#2563eb", "#16a34a", "#ea580c", "#7c3aed"];

function ColorSelector({ selectedColor, onChangeColor }) {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: ".3rem" }}>
      {COLORS.map((color) => (
        <button
          key={color}
          type="botton"
          onClick={() => onChangeColor(color)}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            border:
              selectedColor === color ? "2px solid black" : "1px solid #ccc",
            backgroundColor: color,
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}

function ColorPreview({ selectedColor }) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: ".5rem",
        backgroundColor: selectedColor,
        color: "white",
        padding: ".3rem",
      }}
    >
      Secilen Renk: <code>{selectedColor}</code>
    </div>
  );
}

function LiftingStateUp() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  return (
    <section className="gray-box">
      <h4>State nach oben bringen (Lifting State Up)</h4>
      <p>
        Der Farbzustand (selectedColor) wird nur in der übergeordneten
        Komponente gespeichert. Sowohl die Farbauswahl- als auch die
        Vorschaukomponente erhalten diesen Zustand über Props. So bleiben beide
        immer synchron.
      </p>{" "}
      <ColorSelector
        selectedColor={selectedColor}
        onChangeColor={setSelectedColor}
      />
      <ColorPreview selectedColor={selectedColor} />
    </section>
  );
}

export default LiftingStateUp;
