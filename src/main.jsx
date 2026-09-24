import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import App from "./App"
import ComingSoon from "./pages/ComingSoon"
import ProjectPage from "./pages/ProjectPage"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route
          path="/coming-soon"
          element={<ComingSoon />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)