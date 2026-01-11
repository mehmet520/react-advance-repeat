import { useEffect, useState } from "react";

export default function withMousePosition(WrappedComponent) {
  // Die neue Komponente, die von HOC erstellt wurde.
  console.log("WrappedComponent.name :>> ", WrappedComponent.name);
  function WithMousePosition(props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
      // Callback, wenn die Maus sich bewegt.

      function handleMouseMove(event) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }

      // Abonnement: Füge einen Listener zum Fenster hinzu.
      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup: Abonnement entfernen, wenn die Komponente unmontiert wird.
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []); // []: Nur beim ersten Mount und Unmount funktionieren.

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  }

  //Um in den DevTools einen schönen Namen anzuzeigen:
  const wrappedName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  WithMousePosition.displayName = `withMousePosition(${wrappedName})`;
  console.log(
    "WithMousePosition.displayName :>> ",
    WithMousePosition.displayName
  );
  return WithMousePosition;
}
