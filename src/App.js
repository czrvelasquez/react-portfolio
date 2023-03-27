import './App.scss';
import AboutMe from './components/Aboutme/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import MyWork from './components/MyWork/MyWork';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return <>
    <Navbar/>
    <AboutMe/>
    <Skills/>
    <MyWork/>
    <ContactMe/>
    </>
    
}

export default App;
