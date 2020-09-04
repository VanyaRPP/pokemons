import React, { useState, useEffect} from 'react'
import axios from 'axios'
import s from './stylePokePage.module.css'
import PokeList from '../PokeList/PokeList'
import PokeLoader from '../PokeLoader/PokeLoader'
import Pagination from '../Pagination/Pagination'


export default function PokePage() {

const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
const [Count, setCount] = useState(null)
const [nextPageUrl, setNextPageUrl] = useState(null)
const [prevPageUrl, setPrevPageUrl] = useState(null)
const [Pokemons, setPokemons] = useState([])/////////////
const [Loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(true)
  let cancel
  axios.get(currentPageUrl, {
    canselToken: new axios.CancelToken( c => cancel = c )})
    .then(
      res=>{
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setCount(res.data.count)
        //setPokeUrl(res.data.results.map(u=>u.url))
        setPokemons(res.data.results.map(p => p.name))
      }
    )
    return () => cancel()
}, [currentPageUrl])


function gotoNextPage() {
  setCurrentPageUrl(nextPageUrl)
}

function gotoPrevPage() {
  setCurrentPageUrl(prevPageUrl)
}

function CardonDyspay() {
  setCurrentPageUrl(prevPageUrl)
}

if (Loading) return <PokeLoader/>

  return (
    //console.log(PokeUrl),
    <>
      <div>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      <p>
        Next: {nextPageUrl}
      </p>
      <p>
        Prev: {prevPageUrl}
      </p>
      <p>
        Count:{Count}
      </p>
      </div>
      <div className={s.grid}>
          {Pokemons.map(p=>(
            <div key={p}>
              <PokeList p={ p }/>
            </div>
          ))}
        {/*<PokeList pokemons = { Pokemons, PokeUrl}/>*/}
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </div>
    </>  
  )
}
