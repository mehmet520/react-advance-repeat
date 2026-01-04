import { useTheme } from "./ThemeContext";

function ThemeInfoCard() {
  const { theme } = useTheme();

  const boxStyle =
    theme === "light"
      ? {
          padding: "1rem",
          borderRadious: "0.5rem",
          border: "1px solid #e5e7eb",
          backgroundColor: "#fff",
        }
      : {
          padding: "1rem",
          borderRadious: ".5rem",
          border: "1px solid #1f2937",
          backgroundColor: "#020617",
          color:'#ffe'
        };

  return (
    <div style={boxStyle}>
      <h4>ThemeInfoCard</h4>
      <p>
        Diese Karte ändert ihr Aussehen, indem sie nur den Thema-Wert im Context
        liest. Es werden keine Props übergeben.
      </p>
      <p>
        Das aktuelle Thema: <strong>{theme}</strong>
      </p>
    </div>
  );
}

export default ThemeInfoCard;
