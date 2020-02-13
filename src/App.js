import React from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Services from './Components/Services';
import './App.css';

function App() {
  return (
    <div>
      <Navigation namePage="React App" />
      <Header text="React Project" button="Find Out More" />
      <Services />
    </div>
  );
}

export default App;
