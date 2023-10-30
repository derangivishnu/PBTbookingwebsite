import React from 'react'


import Carousel1 from '../components/carousel/Carousel1'
import  'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Cards from '../components/cards/Cards';
import Cards2 from '../components/cards/Cards2';
import { Toolbar } from '@mui/material';
import Cards3 from '../components/cards/Cards3';






const HomePage = () => {
  return (
    <div style={{background:'#fce4ec'}} >
        
        <Carousel1/>
        <br />
        <h1>TOP SELLER</h1>
        <br />
        <Cards/>
        <br />
        <Carousel1/>
        <br />
        <h1>TESTINOMIALS</h1>
        <br />
        <Cards2/>
        <Toolbar/>
        <h1>COLLECTIONS</h1>
        <br />
        <Cards3/>
        <br />
        
        
        
      
    </div>
  )
}

export default HomePage
