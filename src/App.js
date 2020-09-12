import React, { useContext } from 'react';
import './App.css';
import Header from './component/Heder/Header';
import PokeList from './component/PokeList/PokeList';
import PokePage from './component/PokePage/PokePage';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { pageContext } from './component/pageContext';

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <PokePage/>
        </div>
      </Router>
  );
}

export default App;
