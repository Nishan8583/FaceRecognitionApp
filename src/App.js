import React from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation.js';
import Logo from './Component/Logo/Logo.js';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import 'tachyons';
import Rank from "./Component/Rank/Rank"
import Particles from 'react-particles-js';

const particleParams={
  particles: {
    number:{
      value: 300
    }
  }
}

function App() {
  return (
    <div className="App">
   <Particles className="particles"
                 params={particleParams}/>
      <Navigation />
      <Logo/>
      <Rank />
      <ImageLinkForm />{
      /*
      <FaceRecognition />
      */}
    </div>
  );
}

export default App;
