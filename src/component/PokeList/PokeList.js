import React, { Component } from 'react';
import s from './stylePokeList.module.css'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
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
/*
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
