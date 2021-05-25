import logo from './logo.svg';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeaderSlider from './components/HeaderSlider';
import ProductCard from './components/ProductCard';
import Slider from './components/Slider';
import Slider2 from './components/Slider2';
import Slider3 from './components/Slider3';
import Slider4 from './components/Slider4';
import Slider5 from './components/Slider5';
import Slider6 from './components/Slider6';
import Slider7 from './components/Slider7';
import Slider8 from './components/Slider8';
import Slider9 from './components/Slider9';
import Lang from './components/Lang';
import Footer from './components/Footer';
import PrimeHeader from './components/PrimeHeader';
import PrimeHead from './components/PrimeHead';
import PrimeHead2 from './components/PrimeHead2';
import PrimeHead3 from './components/PrimeHeader3';
import PrimeFooter from './components/PrimeFooter';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Page1} />
      <Route path="/page" component={Page2} />
    </Router>
  );
}

export default App;
