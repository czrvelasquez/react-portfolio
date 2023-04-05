import React from 'react'

function ContactMe() {
  return <>
    <div className="container-fluid">
      <div className="form-container col-3">
        <form action="">
            <h3>Contact me</h3>
            <input type="text"  placeholder='leave your name'/>
            <input type="email" name="" id="" placeholder='email' />
            <input type="text-area" name="" className="message" placeholder='send me a message' />
        </form>
        <div className="dm-container">
          <h5>Send me a Direct message</h5>
          <ul>
            <li><a href="/">WP</a></li>
            <li><a href="/">TG</a></li>
            <li><a href="/">GM</a></li>
          </ul>
        </div>
        
      </div>
        
    </div>
  </>
}

export default ContactMe