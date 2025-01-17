import './App.css';
import React from "react";
import NavigationMenu from './components/Header/index';
import Banner from './components/Banner';
import SectionOne from './components/Features/SectionOne';
import SectionTwo from './components/Features/SectionTwo';
import SectionThree from './components/Features/SectionThree';


function App() {
  return (
    <div className='App'>
      <NavigationMenu />
      <Banner/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
}

export default App;
