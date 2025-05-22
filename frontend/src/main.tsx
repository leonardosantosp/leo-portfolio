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
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:repository" element={<ProjectDetailsPage />} />
        <Route path="/projects/:slug" element={<ProjectsByStackPage />} />
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
