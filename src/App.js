
import './App.css';
import Navbar from './components/Navbars/Navbar';
import Navbar2 from './components/Navbars/Navbar2';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Blousespage from './pages/Blousespage';
import PricingPage from './pages/PricingPage';
import ComboPackPage from './pages/ComboPackPage';
import SareesPage from './pages/SareesPage';
import HomePage from './pages/HomePage';
import { Toolbar } from '@mui/material';
import Footer from './components/footer/Footer';
import SignUpPage from './pages/SignUpPage';
import YourcartPage from './pages/YourcartPage';
import LoginPage from './pages/LoginPage';
import BookingPage from './pages/BookingPage';
import BookingConfirmPage from './pages/BookingConfirmPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Toolbar/>
      <Navbar/>
      <br/>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/blouses' element={<Blousespage/>}></Route>
        <Route path='/combo' element={<ComboPackPage/>}></Route>
        <Route path='/pricing' element={<PricingPage/>}></Route>
        <Route path='/sarees' element={<SareesPage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/yourcart' element={<YourcartPage/>}></Route>
        <Route path='/book' element={<BookingPage/>}></Route>
        <Route path='/confirm' element={<BookingConfirmPage/>}></Route>
        <Route path='/details' element={<DetailsPage/>}></Route>


      </Routes>
      </BrowserRouter>
     <br/>
     <Footer/>
    </div>
  );
}

export default App;
