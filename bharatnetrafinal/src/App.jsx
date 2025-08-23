import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Tools from './components/Tools';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Mission />
      <Tools />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;