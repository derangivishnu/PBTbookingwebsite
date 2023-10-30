import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



const ComboPackPage = () => {
  return (
    <div>
      <div className="container" class="d-flex">

        <div className="box1" class="d-block mx-4" style={{border:"2px solid pink", borderRadius:"10px"}}>
          <div className="search" class="mx-1">
            <label htmlFor=""><h6>Search here</h6></label> <br />
            <input type="search" placeholder='search for combo' id="" />
          </div>
          <div className="pics" class="p-4">
            <img height={600} width={450} src="https://i0.wp.com/sareeing.com/wp-content/uploads/2023/01/pongal-handloom-saree-kashmira-pardeshi-2-819x1024.webp?resize=819%2C1024&ssl=1" alt="" />
          </div>

        </div>
        <div className="box2">
          <h1>Combo Packs</h1>
          <br/>

          <div className="container">
            <div className="row">

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/2%20by%202%20Combo/DSC_4225-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/2%20by%202%20Combo/DSC_4224-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/2%20by%202%20Combo/DSC_4223-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/Silk%20Cotton%20Combo/DSC_4218-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>


            </div>
            <br/>

            <div className="row">

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/2%20by%202%20Combo/DSC_4225-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/2%20by%202%20Combo/DSC_4224-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/2%20by%202%20Combo/DSC_4223-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                 <img src="https://www.athreyablouses.com/image/cache/catalog/Silk%20Cotton%20Combo/DSC_4218-400x400.jpg" class="card-img-top" alt="..."/>
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>


            </div>
          </div>

        </div>
      </div>
        
     
    </div>
  )
}

export default ComboPackPage
