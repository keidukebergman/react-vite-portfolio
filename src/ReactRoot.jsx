import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style_sheets/main.css'
import './style_sheets/headers.css'
import './style_sheets/work.css'
import './style_sheets/about.css'
import './style_sheets/contact.css'

import { HeaderPresenter} from './presenter/headerPresenter'
import { BackgroundShaderView } from './view/backgroundShaderView'
import { IntroductionView } from './view/introductionView'
import { ProjectPresenter } from './presenter/projectPresenter'
import { AboutPresenter } from './presenter/aboutPresenter'
import { ContactPresenter } from './presenter/contactPresenter'

function ReactRoot(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <BackgroundShaderView/>
        <HeaderPresenter/> 
      </div>
      <ProjectPresenter projectData = {props.projectData}/>
      <AboutPresenter aboutme = {props.aboutme}/>
      <ContactPresenter/>
    </>
  )
}

export default ReactRoot
