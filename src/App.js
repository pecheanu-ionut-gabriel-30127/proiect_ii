import React from 'react'
import ImgCarousel from './components/carousel/ImgCarousel';
import Rabla from './components/rabla/Rabla';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Oferta from './components/oferta/Oferta';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Rabla />
      <Oferta />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
