import React, {useState, useEffect} from 'react'
import PokeList from '../PokeList/PokeList'

export default function PokePage() {

  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
  const [Count, setCount] = useState(null)
  const [nextPageUrl, setNextPageUrl] = useState(null)
  const [prevPageUrl, setPrevPageUrl] = useState(null)

  return (
    <div>
      <PokeList/>
    </div>
  )
}
