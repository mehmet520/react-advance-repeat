import { useTheme } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="gray-box" style={{ marginBottom: "1rem" }}>
    <h4>ThemeToggle-Komponente</h4>
      <p>
        Aktif tema:{" "}
        <strong>{theme === "light" ? "Licht Thema" : "Dunkles Thema"}</strong>
      </p>
      <button type='button' onClick={toggleTheme}>Thema ändern</button>
    </div>
  );
}

export default ThemeToggle;
