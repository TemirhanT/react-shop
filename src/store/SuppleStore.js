import {makeAutoObservable, runInAction} from 'mobx';
import { server } from '../http';

export default class SuppleStore {

    _supples = []
    supples = []
    bestSupples = []
    page = 1
    totalCount = 0
    limit = 15
    areAllLoading = true
    areSupplesLoading = false
    isOneSuppleLoading = true



    selectedValue = 'default'

    constructor() {
        makeAutoObservable(this)
    }

    selectSort = (a, b) => {
        switch(this.selectedValue) {
            case 'default' :
            return a.id - b.id

            case 'new':
            return a.body.length - b.body.length;

            case 'old':
            return b.body.length - a.body.length;

            case 'cheap':
            return a.title.length - b.title.length;

            case 'expensive':
            return b.title.length - a.title.length;
        }
    }
    



    // set
    setAreAllLoading(bool) {
        this.areAllLoading = bool;
    }
    setAreSupplesLoading(bool) {
        this.areSupplesLoading = bool
    }
    setIsOneSuppleLoading(bool) {
        this.isOneSuppleLoading = bool
    }
    setSupples(value) {
        this._supples = value;
        this.supples = this._supples
    }
    setBestSupples(value) {
        this.bestSupples = value.filter(supple => supple.id < 7)
    }
    setPage(pageNumber) {
        this.page = pageNumber
    }
    setTotalCount(totalCountNumber) {
        this.totalCount = totalCountNumber
    }
    setSelectedValue(value) {
        this.selectedValue = value
    }



    // sort

    // filterSupple сейчас не работает, так как в jsonplaceholder нет нужных свойств, по которым можно бы бы ло фильтровать
    filterSupple(attr) {
        runInAction(() => {
            this.supples = this._supples
            this.supples = this.supples.filter(thing => thing.type === attr)
        })
    }
    
    filterSearch(value) {
        runInAction(() => {
            this.supples = this._supples.filter(supple => supple.title.toLowerCase().includes(value.toLowerCase()))
        })
    }
    
    // sortSupple сейчас можно счиtitleне работает, так как в jsonplaceholder нет нужных свойств, по которым можно бы бы ло сортировать
    sortSupple(value) {
        runInAction(() => {
            this.selectedValue = value
            this.supples.sort((a, b) => this.selectSort(a, b))
        })
    }
    
    resetSupple() {
        runInAction(() => {
            this.supples = this._supples
        })
    }


    // axios
    async fetchOneSupple(id) {
        try {
            const {data} = await server.get('posts/' + id)
            return data
        } catch(e) {
            alert(e.message)
        }
    }
    
    async fetchAllSupples() {
        try {
            const {data} = await server.get('/posts')
            return data
        } catch(e) {
            alert(e.message)
        }
    }
    
    async fetchSupplesPage() {
        try {
            const {data} = await server.get('/posts?_limit=' + this.limit + '&_page=' + this.page)
            return data
        } catch(e) {
            alert(e.message)
        }
    }
}
