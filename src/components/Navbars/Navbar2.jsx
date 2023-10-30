import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar2 = () => {
  return (
    <div style={{background:'#fce4ec'}}>
        

<nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blouses">Blouses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pricing">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/sarees">Sarees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/combo">Combopack</a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Your Account
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/login">Login</a></li>
            <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
            <li><a class="dropdown-item" href="/yourcart">Your Cart</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar2
