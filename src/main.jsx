import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./features/context/ThemeContext.jsx";
import DataCacheProvider from "./features/patterns/render-props/data-fetcher/DataCacheProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DataCacheProvider>
          <App />
        </DataCacheProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
