import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FISAT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">Add courses</Link>
        <Link class="nav-link active" aria-current="page" to="/search">searchcourses</Link>
        <Link class="nav-link" to="/view">View Courses</Link>
       
      </div>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default NavBar