import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Project } from './pages/Project.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectByStack } from './pages/ProjectByStack.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/projects/:stackId" element={<ProjectByStack />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
