import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CountryProvider } from "./@core/context/CountryContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountryProvider>
      <App />
    </CountryProvider>
  </StrictMode>
);
