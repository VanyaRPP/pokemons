import React, { useState, useEffect} from 'react'
import axios from 'axios'
import s from './stylePokePage.module.css'
import PokeLoader from '../PokeLoader/PokeLoader'
import Pagination from '../Pagination/Pagination'
import PokeCard from '../PokeCard/PokeCard'
import { Button, BackTop, Collapse } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'
import PokeInfoModal from '../PokeInfoModal/PokeInfoModal'
import Search from 'antd/lib/input/Search'

export default function PokePade () {

const { Panel } = Collapse;
const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)////
const [Count, setCount] = useState(null)
const [nextPageUrl, setNextPageUrl] = useState(null)
const [prevPageUrl, setPrevPageUrl] = useState(null)
const [Pokemons, setPokemons] = useState([])/////////////
const [Loading, setLoading] = useState(true)
const [pageNumber, setpageNumber] = useState(1)
const [allPokemon, setallPokemon] = useState(false)
const [filteredPokemons, setfilteredPokemons] = useState([])
const [search, setSearch] = useState("");

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
        setPokemons(res.data.results.map(p => p.name))
      }
    )
    return () => cancel()
}, [currentPageUrl])

/*useEffect(() => {
  setfilteredPokemons(
    Pokemons.filter((Pokemons) =>
      Pokemons
    )
  );
}, [search, Pokemons]);*/


function gotoNextPage() {
  setCurrentPageUrl(nextPageUrl)
  setpageNumber(pageNumber+1)
}

function gotoPrevPage() {
  setCurrentPageUrl(prevPageUrl)
  setpageNumber(pageNumber-1)
}

function gotoAllPage() {
  setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050`)
  setpageNumber(1)
}
function goto10Page() {
  setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
  setpageNumber(1)
}
function goto20Page() {
  setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
  setpageNumber(1)
}
function goto50Page() {
  setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=&limit=50`)
  setpageNumber(1)
}


if (Loading) return <PokeLoader/>

  return (
    //console.log(PokeUrl),
    <>
      <Search
      placeholder="Search Pokemon"
      onSearch={
        value => console.log(value)
      }
      className={s.Defolt}
    />
      <div>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        pageNumber={pageNumber}
      />
      <div>
        <Collapse ghost style={{background:'grey', borderRadius:'20px',border:'2px solid violet'}}>
          <Panel
          header="Select Poke Card In Store"
          key="1"
          className={s.Defolt}
          >
          <Button onClick={gotoAllPage} className={s.Defolt}>All</Button>
          <Button onClick={goto10Page} className={s.Defolt}>10</Button>
          <Button onClick={goto20Page} className={s.Defolt}>20</Button>
          <Button onClick={goto50Page} className={s.Defolt}>50</Button>
          </Panel>
        </Collapse>

      </div>
      {/*<p>
        Next: {nextPageUrl}
      </p>
      <p>
        Prev: {prevPageUrl}
      </p>
      <p>
        Count:{Count}
      </p>*/}
      </div>
      <div className={s.grid}>
          {Pokemons.map(p=>(
            <div key={p}>
              <PokeCard p={ p }/>
            </div>
          ))}
      </div>
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        pageNumber={pageNumber}
      />
      <BackTop>
        <UpCircleOutlined style={{fontSize:'45px',color:'violet'}}/>
      </BackTop>
    </>  
  )
}
