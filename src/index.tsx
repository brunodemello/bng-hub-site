import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BngHubLayoutSite } from "./screens/BngHubLayoutSite/BngHubLayoutSite";
import { QuemSomosPage } from "./screens/QuemSomosPage";
import { ContatoPage } from "./screens/ContatoPage";
import { PessoasPage } from "./screens/PessoasPage";
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage";
import { BlogHomePage, BlogCategoryPage, BlogPostPage, BlogSearchPage, BlogTagPage } from "./screens/BlogPages";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BngHubLayoutSite />} />
        <Route path="/quem-somos" element={<QuemSomosPage />} />
        <Route path="/pessoas" element={<PessoasPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/politicas-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/hub-news" element={<BlogHomePage />} />
        <Route path="/hub-news/categoria/:categorySlug" element={<BlogCategoryPage />} />
        <Route path="/hub-news/post/:postSlug" element={<BlogPostPage />} />
        <Route path="/hub-news/search" element={<BlogSearchPage />} />
        <Route path="/hub-news/tag/:tagSlug" element={<BlogTagPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
