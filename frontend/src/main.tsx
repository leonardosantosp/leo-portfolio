import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProjectDetailsPage } from './pages/ProjectDetailsPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProjectsByStackPage } from './pages/ProjectsByStackPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { AdminPage } from './pages/AdminPage.tsx'
import { AdminProvider } from './components/admin-page/AdminProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/projects/:stackId" element={<ProjectsByStackPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin-page"
          element={
            <AdminProvider>
              <AdminPage />
            </AdminProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
