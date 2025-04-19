import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProjectDetailsPage } from './pages/ProjectDetailsPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectsByStackPage } from './pages/ProjectsByStackPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/projects/:stackId" element={<ProjectsByStackPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
