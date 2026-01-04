import { useState } from "react";

function FormState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      alert("Geben Sie bitte einen Name!");
      return;
    }
    alert(
      `Kaydedilen kisi: ${name} (${age || "Das Alter wurde nicht angegeben."})`
    );
  }
  return (
    <section
      style={{
        background: "#aaa",
        padding: "6pt",
        border: "1pt solid #666",
        borderRadius: "10pt",
        margin: "10pt 0",
      }}
    >
      <h4>Formzustand (Controlled Inputs)</h4>
      <form onSubmit={handleSubmit} style={{}}>
        <label htmlFor="">
          Name:
          <input
            name="ad"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Age:
          <input
            name="age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit">Speichern</button>
      </form>

      <div>
        <strong>Vorschau:</strong>{" "}
        {name
          ? `${name} (${age || "Das Alter wurde nicht angegeben."})`
          : "Es wurde noch keine Information eingegeben."}
      </div>
    </section>
  );
}

export default FormState;
