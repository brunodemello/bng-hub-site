import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BngHubLayoutSite } from "./screens/BngHubLayoutSite/BngHubLayoutSite";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BngHubLayoutSite />
  </StrictMode>,
);
