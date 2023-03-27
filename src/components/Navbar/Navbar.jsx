import React from 'react'

function Navbar() {
  return (
    <div className="navbar-container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">@Czrvelasquez</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">My Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">My Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='/'>Contact me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar   