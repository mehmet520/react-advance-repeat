import BasicEffect from "../../features/effects/BasicEffect";
import CleanupEffect from "../../features/effects/CleanupEffects";
import FetchSimulation from "../../features/effects/FetchSimulation";

function EffectsIntro() {
  return (
    <section>
      <h3>Nebenwirkungen (Effekte) Einführung</h3>
      <p>
        In diesem Modul werden wir behandeln, wie man useEffect, Datenabruf
        (data fetching) und die Verwaltung von Nebenwirkungen wie Timer und
        Abonnements
      </p>
      <p>
        React-Komponenten sollten während des Renderns nur JSX erzeugen. Der
        Zugriff auf Browser-APIs, das Abrufen von Daten oder das Starten von
        Timern werden als Nebeneffekte (Side Effects) bezeichnet und werden mit
        dem useEffect-Hook verwaltet.
      </p>

      <p>
        In den folgenden Beispielen sehen Sie ein grundlegendes Effect, eine
        Datenabfrage-Simulation und ein Timer-Beispiel, das eine Bereinigung
        erfordert.
      </p>
      <CleanupEffect />
      <BasicEffect />
      <FetchSimulation />
    </section>
  );
}

export default EffectsIntro;
