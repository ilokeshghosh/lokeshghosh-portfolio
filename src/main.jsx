import React from 'react'
import ReactDOM from 'react-dom/client'
import { Card, About, Home, Skills, Educations, Projects, Specializations, Contact } from './components/index'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='skills' element={<Skills />} />
      <Route path='educations' element={<Educations />} />
      <Route path='projects' element={<Projects />} />
      <Route path='specializations' element={<Specializations />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
