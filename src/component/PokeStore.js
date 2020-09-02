import { decorate, observable } from "mobx"

class Pokemon {
    id=0
    
}
decorate(Pokemon, {
    title: observable,
    finished: observable,
})