import React from 'react';
import "./styling/app.css";
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
