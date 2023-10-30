import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Carousel1 = () => {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.athreyablouses.com/image/cache/catalog/Home%20Top%20Banner/block%20print%20collections-1920x440.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.athreyablouses.com/image/cache/catalog/Home%20Top%20Banner/Banner%2001-1920x440.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.athreyablouses.com/image/cache/catalog/Home%20Bottom%20Banner/Customise-1920x440.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
    </div>
  )
}

export default Carousel1
