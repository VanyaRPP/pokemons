import React, { useContext } from 'react';
import './App.css';
import Header from './component/Heder/Header';
import PokeList from './component/PokeList/PokeList';
import PokePage from './component/PokePage/PokePage';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import { pageContext } from './component/pageContext';

function App() {
  return (
    <pageContext.Provider>
      <div className="App">
        <Header/>
        <PokePage/>
      </div>
    </pageContext.Provider>

  );
}

export default App;
