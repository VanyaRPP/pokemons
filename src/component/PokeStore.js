
import { observable } from 'mobx'
import { createContext } from 'react'

class Stores {
    /* ---------------CONT--------------- */
    @observable offset_num = ''
    @observable limit_num = '100'
    @observable pokemon = null
    @observable urlType = 'https://pokeapi.co/api/v2/type/'
    @observable DrawerOpen = false
    @observable strings = ''
    @observable sort_num = '100'
    /* ---------------Pokemon--------------- */
    @observable name = ''
    @observable pokemonIndex = ''
    @observable imgUrl = ''
    @observable types = []

    @observable shov = true
}

export const StoreContext = createContext(new Stores())