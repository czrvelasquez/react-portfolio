import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutMe =() => {

  return <div className='aboutme-container'> 
    <div className="card-container">
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4" id="profile-container">
      <img src="https://bucket23gprueba.s3.amazonaws.com/perfil.jpeg" class="img-fluid rounded-start" alt="..."/>
      <div className="card-social-container">
            <h6>I love to support the community and share knowledge</h6>
            <p><small>Follow me!</small></p>
          <a href="/"><i><FontAwesomeIcon icon="fa-brands fa-instagram" beat style={{color: "#e1306c",}} /></i></a>
          <a href="/"><i><FontAwesomeIcon icon="fa-brands fa-youtube" beat style={{color: "#ff0000",}} /></i></a>
          <a href="/"><i><FontAwesomeIcon icon="fa-brands fa-twitter" beat style={{color: "#1d74f2",}} /></i></a>
          <a href="/"><i><FontAwesomeIcon icon="fa-brands fa-github" beat style={{color: "#171515",}} /></i></a>
          </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hello world! Im Cesar Velasquez</h5>
        <p class="card-text">Im an incredible Frontend Developer</p>
        <p>
          <small class="text-body-secondary">
            Passionate about JavaScript.
            I'm interested in working for a company that adds value to the community and I'm always trying to
            learn new technologies and seek for a way to implement them in my current projects.
            I love creating content for the community and contribute to the open source.
          </small>
          
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>  
}


export default AboutMe
