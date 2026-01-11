export default function PanelMouseLogger({ mousePosition }) {
  // mousePosition yoksa hiçbir şey gösterme
  if (!mousePosition) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        padding: 8,
        borderRadius: 4,
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        fontFamily: "monospace",
        fontSize: 12,
      }}
    >
      <div>Mouse position</div>
      <div>
        x: {mousePosition.x}, y: {mousePosition.y}
      </div>
    </div>
  );
}
