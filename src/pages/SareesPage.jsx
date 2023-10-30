import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sarees.css'


const SareesPage = () => {
  return (
    <div>
        
        <div className="container" class="d-flex">

        <div className="box1" class="d-block mx-4" style={{border:"2px solid pink", borderRadius:"10px"}}>
          <div className="search" class="mx-1">
            <label htmlFor=""><h6>Search here</h6></label> <br />
            <input type="search" placeholder='search for sarees' id="" />
          </div>
          <div className="pics" class="p-4">
         <a href="/details">
         <img   height={600} width={450} src="https://i.pinimg.com/474x/7c/76/ff/7c76ff2f053039a92fa4db8a42cfb1b5.jpg" alt=""  />
          </a>  
          </div>

        </div>
        <div className="box2">
          <h1>Sarees</h1>
          <br/>

          <div className="container">
            <div className="row">

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                  <a href="/details">
                  <img style={{height:152,width:160}} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYQ6jKP-aAicEcu7Lv-HeZWzp9Q-zi4DYpCSiC-abJN4_C0nKRrb-Nil0SWGyGMy2NwmMVVtxzMBRTf4vE044uYvqDjeio5Zez34qFe8w&usqp=CAc" alt="..."/>
                  </a>
                 
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                  <a href="/details">
                  <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRff8_75gzFDFK8PY1YtW2hg_YR6824iMirG_IYJQFn0lYzi36ZETMx12LqpNh3MEUGQfQZ0ikCNdc7AkLl92iDjelG_8v3I_GWfiUK_y5_OfDYY48pUqg3wg&usqp=CAc" class="card-img-top" alt="..."/>
                  </a>
                 
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>

                  <a href="/details">
                  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6vSu6wNKnzkrdtX4TJ2qHqbE4Wu-bgMs-H8T2Td8q1tU0kQAelplR6QCS3xjQ7KCmZjDFM4saNf-kSv8jEzB8x6FseD3zI_TBPr6Vzs_QHPjoq365MAS46g&usqp=CAc" class="card-img-top" alt="..."/>

                  </a>
                 
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>

                  <a href="/details"><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ4Tee3iPMVnOy_tKThRYkgcu-ZwTLCie7WREqC8hcNAZWBdLc3TQZ5nx4E9Atl2F3xwK6g9A6CEQTQ7zcfpg44Ldc1zGmTc3gSsGnfGl_A8C0rZXe2il7fJg&usqp=CAc" class="card-img-top" alt="..."/></a>
                 
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
                  <a href="/details">
                  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0rg_TMVa36z7zD-UixBaRyqPCD1burEvTGRilou6lsY4Fc7QaGgkFm7-1VyoazEYUWZyfF_E5wX4gG3Vy5IVZdz3JSCO6lUHtrq1n1qps&usqp=CAc" class="card-img-top" alt="..."/>
                  </a>
                 
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                  <a href="/details">
                  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhbKMBJ-arwxQqKNNfUyf4prLhzfXj9Ov7Kw0LxV8lQucUvyd7y0OTe4YdkVk7TUcJ5TdfDev0eAcE49GIEJ95p5K6WQEGlqYtS5QyKFl2xnAwOMqXNJH_p1A&usqp=CAc" class="card-img-top" alt="..."/>
                  </a>
               
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                  <a href="/details">
                  <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRuC0gh1a_Gm91o1mfcVwS0C3-ASX_TRPAfkf3Ks7aqsytv7VfgHNR7NOxtVzJKj9WxaNH72CpBZhZpQPWnyS67iYQ5byf6ifCYoQceLtaqS2YNSCWe66nk&usqp=CAc" class="card-img-top" alt="..."/>
                  </a>
                
                   <div class="card-body">
                    <h6 class="card-title">Broadcade blue blouse</h6>
                    <h5 class="card-text">600 rupees</h5>
                     <a href="/book" class="btn btn-primary">Book</a>
                  </div>
                  </div>
              </div>

              <div className="col">
                <div class="card" style={{height:300,width:160}}>
                  <a href="/details">
                  <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvVNgMfFdy1LIuiaiYSu23L-5kSZnHBQAGk3dProWgZb0b6xtOSJ7Rkvtz2lcj1aKQjY94C-BzKmXlm6iEtUZnNJ06gsStYX60K2G5lyupBc9PkzbdEVAClg&usqp=CAc" class="card-img-top" alt="..."/>
                  </a>
                 
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

export default SareesPage
