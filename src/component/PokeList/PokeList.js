import React, { Component } from 'react';
import s from './stylePokeList.module.css'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import PokeCard from '../PokeCard/PokeCard';
import { Spin } from 'antd';


export default class PokeList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0',
    pokemon: null,
  };


  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  }

  render() {
    return (
      <div >
        {this.state.pokemon ? (
          <div className={s.row}>
            {this.state.pokemon.map(pokemon => (
              <div>
                    <PokeCard 
                      key={pokemon.name}
                      name={pokemon.name}
                      url={pokemon.url}
                    />
              </div>
            ))}
          </div>
        ) : (
          <p>
            Loadin...
          </p>
        )}
      </div>
    );
  }
}