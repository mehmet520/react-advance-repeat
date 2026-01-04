import BasicCounter from "../../features/state/BasicCounter";
import DerivedState from "../../features/state/DerivedState";
import FormState from "../../features/state/FormState";
import LiftingStateUp from "../../features/state/LiftingStateUp";

function StateIntro() {
  return (
    <section>
      <h3>Zustandsmanagement (Status) Einführung</h3>
      <p>
        In diesem Modul werden wir die Konzepte von useState, dem Umfang des
        Komponentenstatus und den Übergang zu globalen State-Lösungen behandeln.
      </p>
      <p>
        Der Zustand (State) in React hält die Daten Ihrer Komponente, die sich
        im Laufe der Zeit ändern können. Ein Beispiel für einen Zustand ist der
        Zählerwert, der Formularinhalt oder das Ergebnis einer Listenfilterung.
      </p>

      <p>
        Unten sind zwei einfache Beispiele: Zuerst ein grundlegender Zähler,
        dann eine Komponente, die zeigt, wie der Status eines Formulars
        überprüft wird.
      </p>
      <LiftingStateUp />
      <BasicCounter />
      <FormState />
      <DerivedState />
      
    </section>
  );
}

export default StateIntro;
