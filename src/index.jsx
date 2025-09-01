import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Design } from "./screens/Design/Design.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Design />
  </StrictMode>
);
