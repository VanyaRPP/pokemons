import React from 'react';
import './App.css';
import Header from './component/Heder/Header';
import PokeList from './component/PokeList/PokeList';
import PokePage from './component/PokePage/PokePage';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

function App() {
  return (
    <div className="App">
      <Header/>
      <PokePage/>
    </div>
  );
}

export default App;
