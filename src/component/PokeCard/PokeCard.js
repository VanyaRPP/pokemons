import React, {Component}  from 'react'
import s from './stylePokeCard.module.css'
import { Spin } from 'antd';

export default class PokemonCard extends Component {
    
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
    };
    
    componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;
        //const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    
        this.setState({ name, imageUrl, pokemonIndex });
    }
    
    render() {
        return (
            <div className={s.pokecard}>
            <div>
                <img height='100px' src={this.state.imageUrl}/>
            </div>
            <div>
                <p>
                {this.state.name}
                </p>
            </div>
        </div>
        )
    }
}
