import React from 'react';
import './App.css';
import Header from './component/Heder/Header';
import PokeList from './component/PokeList/PokeList';

function App() {
  return (
    <div className="App">
      <Header/>
      <PokeList/>
    </div>
  );
}

export default App;
