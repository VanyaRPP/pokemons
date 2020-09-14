import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import s from './stylePokeList.module.css'

export const PokeList = ({Pokemons, search}) => {
  return (
    <div className={s.grid}>
      {
      Pokemons.filter(name => name.includes(search)).map(filteredName => (
        <div key={filteredName}>
          <PokeCard key={filteredName} p={filteredName}/>
        </div>
        ))
      }
    </div>
  )
}
