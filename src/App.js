import React, { useContext } from 'react';
import './App.css';
import Header from './component/Heder/Header';
import PokePage from './component/PokePage/PokePage';
import 'antd/dist/antd.css';

function App() {
  return (
        <div className="App">
          <Header/>
          <PokePage/>
        </div>
  );
}

export default App;
