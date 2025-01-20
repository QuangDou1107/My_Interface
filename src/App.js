import './App.css';
import React from "react";
import NavigationMenu from './components/Header/index';
import Banner from './components/Banner';
import SectionOne from './components/Features/SectionOne';
import SectionTwo from './components/Features/SectionTwo';
import SectionThree from './components/Features/SectionThree';
import SectionFour from './components/Features/SectionFour';
import SectionFive from './components/Features/SectionFive';
import SectionSix from './components/Features/SectionSix';
import SectionSeven from './components/Features/SectionSeven';
import SectionEight from './components/Features/SectionEight';
import SectionNine from './components/Features/SectionNine';
import New from './components/Features/New';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <NavigationMenu />
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <New/>
      <Footer/>
    </div>
  );
}

export default App;
