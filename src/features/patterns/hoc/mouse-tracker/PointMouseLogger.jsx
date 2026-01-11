export default function PointMouseLogger({ mousePosition }) {
  if (!mousePosition) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "red",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // tıklamayı engellemesin
      }}
    />
  );
}

