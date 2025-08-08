import './App.css'

import About from './components/About';
import Header from './components/Header';
import Clients from './components/Clients';
import Offer from './components/Offer';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
    <Header/>
     <Hero/>
     <About/>
     <Clients/>
     <Offer/>
     <Portfolio/>
     <Reviews/>
     <CTA/>
     <Footer/>
    </>
  )
}

export default App
