import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='about' element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='contact' element={<AboutPage />} />
      <Route path='services' element={<ServicesPage />} />
      <Route path='blogs' element={<BlogsPage />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
