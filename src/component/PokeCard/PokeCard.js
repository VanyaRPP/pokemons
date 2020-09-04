import React, {Component}  from 'react'
import s from './stylePokeCard.module.css'


export default class PokemonCard extends Component {
    
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
    };
    
    componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        //const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    
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
/*
import React, {useState} from 'react'
import axios from 'axios'


export default function  PokemonList({ pokemon }) {

const [data, setdata] = useState([])

axios.get(pokemon.map(p=>(

))) 
    .then(
        res=>{
            setdata(res.data.forms.name)
        }
    )

return (
    console.log(pokemon),
    console.log(data),
    
    <div>
        {pokemon.map(u => (
            <div key={u}>
                {u}
            </div>
        ))}
    </div>
    )
}*/