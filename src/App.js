import React, { useContext } from 'react';
import './App.css';
import Header from './component/Heder/Header';
import 'antd/dist/antd.css';
import PokePage from './component/PokePage/PokePage';

function App() {
  return (
        <div className="App">
          <Header/>
          <PokePage/>
        </div>
  );
}

export default App;
