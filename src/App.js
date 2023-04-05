import './App.scss';
import AboutMe from './components/Aboutme/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import MyWork from './components/MyWork/MyWork';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faArrowsSplitUpAndLeft } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee)
library.add(faCubes, faArrowsSplitUpAndLeft)



function App() {

  return ( 
    <div>
    <Navbar />
    <AboutMe title="About Me" id="abut" dark={true}/>
    <Skills title="My coding Journey" id="skills" dark={false}/>
    <MyWork title="My Work" id="work" dark={true}/>
    <ContactMe title="Get in touch" id="contact" dark={false}/>
    <Footer/>            
    </div>
  )
}

export default App;
