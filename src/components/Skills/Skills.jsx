import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Skills() {
  return (
    <div className="skills-container">
        <div className="row skill">
            <div className="col-3">
                <i><FontAwesomeIcon icon="fa-brands fa-html5" flip style={{color: "#e44d26",}} /></i>
                <h6>HTML5</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-sass" flip style={{color: "#cc6699",}} /></i>
                <h6>CSS / SASS</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-square-js" flip style={{color: "#F0DB4F",}} /></i>
                <h6>JavaScript</h6>
            </div>
            <div className="col-3">
                <i><FontAwesomeIcon icon="fa-brands fa-react" flip style={{color: "#61DBFB",}} /></i>
                <h6>REACT JS</h6>
            </div>
        </div>
        <div className="row skill">
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-node-js" flip style={{color: "#3c873a",}} /></i>
                <h6>NODE JS</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon flip icon="fa-solid fa-cubes" /></i>
                <h6>Mongo DB</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-aws" flip style={{color: "#FF9900",}} /></i>
                <h6 id="aws-icon">AWS</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-solid fa-arrows-split-up-and-left" flip/></i>
                <h6 id="agile-icon"> Agile</h6>
            </div>
        </div>
        <div className="row skill">
            <div className="col-3">
            <i><FontAwesomeIcon  flip icon="fa-brands fa-google" /></i>
                <h6>Google Cloud</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-github" flip style={{color: "#171515",}} /></i>
                <h6 id="github-icon"> Github</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-angular" flip style={{color: "#dd1b16 ",}} /></i>
                <h6 id="angular-icon">Angular</h6>
            </div>
            <div className="col-3">
            <i><FontAwesomeIcon icon="fa-brands fa-vuejs" flip style={{color: "#41B883",}} /></i>
                <h6 id="vuejs-icon">Vue js</h6>
            </div>
        </div>
        
    </div>
  )
}

export default Skills
    