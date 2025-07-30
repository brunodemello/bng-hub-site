import "keen-slider/keen-slider.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BngHubLayoutSite } from "./screens/BngHubLayoutSite/BngHubLayoutSite";
import { QuemSomosPage } from "./screens/QuemSomosPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BngHubLayoutSite />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
