import React, { useState, useEffect, useContext} from 'react'
import axios from 'axios'
import s from './stylePokePage.module.css'
import PokeLoader from '../PokeLoader/PokeLoader'
import Pagination from '../Pagination/Pagination'
import { Button, BackTop, Collapse, Input } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'
import Search from 'antd/lib/input/Search'
import { PokeList } from '../PokeList/PokeList'
import { SelectorType, TypeUrlCont } from '../SelectorType/SelectorType'


export default function PokePage(){

  const { Panel } = Collapse;
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
  const [nextPageUrl, setNextPageUrl] = useState(null)
  const [prevPageUrl, setPrevPageUrl] = useState(null)
  const [Pokemons, setPokemons] = useState([])
  const [Loading, setLoading] = useState(true)
  const [pageNumber, setpageNumber] = useState(1)
  const [search, setSearch] = useState('')
  const [TypeFiltre, setTypeFiltre] = useState(true)

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
          TypeFiltre?
          setPokemons(res.data.results.map(p => p.name))
          :setPokemons(res.data.pokemon.map(p => p.pokemon.name))
        }
      )
      return () => cancel()
  }, [currentPageUrl])

  
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
    setpageNumber(pageNumber+1)
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
    setpageNumber(pageNumber-1)
  }
  function gotoAllPage() {
    setTypeFiltre(true)
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050`)
    setpageNumber(1)
  }
  function goto10Page() {
    setTypeFiltre(true)
    setSearch('')
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
    setpageNumber(1)
  }
  function goto20Page() {
    setTypeFiltre(true)
    setSearch('')
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
    setpageNumber(1)
  }
  function goto50Page() {
    setTypeFiltre(true)
    setSearch('')
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`)
    setpageNumber(1)
  }
  function ontypeClick(value){
    setTypeFiltre(false)
    setCurrentPageUrl(value)
  }
  function onclearTypeClick(){
    setTypeFiltre(true)
    goto20Page()
	}
  if (Loading) return <PokeLoader/>
    return (
      <>
        <Search
          placeholder="Search Pokemon"
          defaultValue={
            search!==''?search:null
          }
          onSearch={()=>(
            search!==''?
            gotoAllPage()
            :
            setCurrentPageUrl(currentPageUrl),
            value => setSearch(value)
          )
          }
          onChange={e =>(
            setSearch(e.target.value),
            search===''?
            setCurrentPageUrl(currentPageUrl):gotoAllPage()
          )}
          className={s.Defolt}
        />
        <div>
        <div>
            <Collapse ghost style={{background:'grey', borderRadius:'20px',border:'2px solid violet',border:`none`}}>
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
              <Panel
              header="Select Poke Type"
              key="2"
              className={s.Defolt}
              >
                <SelectorType 
                ontypeClick={ ontypeClick } 
                onclearTypeClick={ onclearTypeClick }
                />
              </Panel>
            </Collapse>
          </div>
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            pageNumber={pageNumber}
          />
        </div>
        <PokeList 
          Pokemons={Pokemons}
          search={search}
        />
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