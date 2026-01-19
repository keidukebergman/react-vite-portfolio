import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactRoot from './ReactRoot.jsx'
import data from './data/data.json'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRoot projectData={data}
    aboutme = {data.about_me}/> 
  </StrictMode>,
)
