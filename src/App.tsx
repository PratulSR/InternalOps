import React from 'react';
// import logo from './logo.svg';
import Button from "./components/CustomButtonComponent";
import './App.css';

function App() {
  return (
    <div>
      <h1>Me and my (new) Love</h1>
      <Button 
        border="black"
        color="light blue"
        height = "40px"
        onClick={() => window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_blank', 'noreferrer')}
        radius = "10%"
        width = "300px"
        children = "Click here for a surprise👀"
        cursor='pointer'
      />
      <img src={require('./Distracted_Sigma.jpg')} alt="Distracted Sigma looking at React" title="Python had my heart, not anymore😤" />
      <button><img src={require('./gdsc-logo.png')} alt="gdsc logo" onClick={() => window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_blank', 'noreferrer')} /></button>
    </div>
  );
}

export default App;
