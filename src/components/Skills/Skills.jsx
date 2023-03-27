import React from 'react'
import {DiReact} from "react-icons/di"
import {AiFillHtml5} from "react-icons/ai"
import {SiNodedotjs, SiSass} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {IoLogoNodejs} from "react-icons/io"

    

function Skills() {
  return (
    <div className="skills-container">
        <div className="row skill">
            <div className="col-4">
                <i><AiFillHtml5/></i>
                <h6>HTML</h6>
            </div>
            <div className="col-4">
            <i><SiSass/></i>
                <h6>CSS / SASS</h6>
            </div>
            <div className="col-4">
            <i><SiJavascript/></i>
                <h6>JavaScript</h6>
            </div>
        </div>
        <div className="row skill">
            <div className="col-4">
            <i><DiReact/></i>
                <h6>React.js</h6>
            </div>
            <div className="col-4">
            <i><IoLogoNodejs/></i>
                <h6>Node.js</h6>
            </div>
            <div className="col-4">
            <i><SiMongodb/></i>
                <h6>MongoDB</h6>
            </div>
        </div>
    </div>
  )
}

export default Skills
    