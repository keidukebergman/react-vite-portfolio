import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactRoot from './ReactRoot.jsx'
import projects from './data/data.json'
import info_tabs from './data/infoTabs.json'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRoot projectData={projects} infoTabs={info_tabs.info_tabs}/> 
  </StrictMode>,
)
