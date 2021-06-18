import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { MyComp } from './components/MyComp';
import { MySearchInput } from './components/MySearchInput';

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <MyComp></MyComp>
    </div>
  );
}

export default App;
