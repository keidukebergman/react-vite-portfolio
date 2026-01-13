import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactRoot from './ReactRoot.jsx'
import projects from './data/projectData.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRoot projectData={projects}/> 
  </StrictMode>,
)
