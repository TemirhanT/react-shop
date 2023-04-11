import {makeAutoObservable} from 'mobx';

export default class BasketStore {

    basket = []

    constructor() {
        makeAutoObservable(this)
    }

    setBasket(thing) {
        this.basket.push(thing)
    }
    deleteBasket(id) {
        this.basket = this.basket.filter(supple => supple.id !== id)
        console.log(this.basket)
    }
}