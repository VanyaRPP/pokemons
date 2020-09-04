/*import React, { Component } from 'react';
import s from './stylePokeList.module.css'
import axios from 'axios';
import PokeCard from '../PokeCard/PokeCard';
import PokeLoader from '../PokeLoader/PokeLoader';
import Pagination from '../Pagination/Pagination';


export default class PokeList extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0',
    count:null,
    nextUrl:null,
    prewUrl:null,
    pokemon: null,
    limit: 80,
    offset: 0
    
  };



  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
    this.setState({ nextUrl: res.data.next });
    this.setState({ prewUrl: res.data.previous });
    this.setState({ count: res.data.count });
  }

  gotoPrevPage=()=>{
    this.url.setState({url:'https://pokeapi.co/api/v2/pokemon?limit=3&offset=0'})
  }
  gotoNextPage=()=>{
    this.setState({url:this.nextUrl})
  }

  render() {
    return (
      <div >
        <Pagination
        gotoNextPage={this.gotoNextPage}
        gotoPrevPage={this.gotoPrevPage}
        />
        <p>
          next: {this.state.nextUrl}
        </p>
        <p>
          prew: {this.state.prewUrl}
        </p>
        <p>
          count: {this.state.count}
        </p>
        
        
        
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
            <PokeLoader/>
          </p>
        )}
      </div>
    );
  }
}

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import PokeCard from '../PokeCard/PokeCard';
import PokeLoader from '../PokeLoader/PokeLoader';


export default function PokeList() {
  const [pokemon, setPokemon] = useState([])
  const [pokeInfo, setpokeInfo] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      setpokeInfo(res.data.results.map(u => u.url))
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return <PokeLoader/>
  
  return (
    <>
      <PokeCard pokemon={pokemon, pokeInfo} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}
*/
import React, { useState, useEffect} from 'react'
import s from './stylePokeList.module.css'
import axios from 'axios'
import { Spin } from 'antd'
//import PokeLoader from '../PokeLoader/PokeLoader'

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};

export default function PokeList({ pokemons, pokeUrl, p ,}) {
  
  
  const [PokeName, setPokeName] = useState(p)
  const [PokeUrl, setPokeUrl] = useState('https://pokeapi.co/api/v2/pokemon/'+ PokeName)
  const [PokeImg, setPokeImg] = useState(null)
  const [PokeID, setPokeID] = useState()
  const [PokeType, setPokeType] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(PokeUrl)
    .then(
      res=>{
        setLoading(false)
        setPokeID(res.data.id)
        setPokeImg(res.data.sprites.front_default)
        setPokeType(res.data.types.map(pt => pt.type.name))
      }
    )
  }, [PokeUrl])


    return (
      //console.log(PokeType),
      //console.log(PokeName),
      <div className={s.pokecard} onClick={()=>alert(PokeName)}>
        <div className={s.CardHeader}>
          <div className={s.idDiv}>
            <p>
              {PokeID}
            </p>
          </div>
          <div className={s.nameDiv}>
            {PokeName}
          </div>
        </div>
        <img src={PokeImg} />
        {PokeType.map(pot => (
          <div className={s.typeDiv}>
            <p style={{color: `#${TYPE_COLORS[pot]}`}}>
              {pot}
            </p>
          </div>
        ))}
      </div>
    )
}
