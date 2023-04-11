import {makeAutoObservable} from 'mobx';
import { server } from '../http';

export default class UserStore {
    constructor() {
        this._isAuth = null
        this._user = {}
        this.theme = 'light'
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
        localStorage.setItem('auth', bool)
    }
    setUser(user) {
        this._user = user
        localStorage.setItem('user', JSON.stringify(user))
    }
    setTheme(color) {
        this.theme = color
    }

    checkAuth() {
        this.setIsAuth(JSON.parse(localStorage.getItem('auth')));
        this.setUser(JSON.parse(localStorage.getItem('user')));
        console.log(this._user, this._isAuth)
    }

    async registration(email, password) {
        const response = await server.post('/users', {email, password});
        this.setIsAuth(true);
        this.setUser(response.data);
    }
    async auth(email, password) {
        try{
            const response = await server.get('/users')
            for(let user of response.data) {
                if(user.email == email && user.id == password) {
                    this.setIsAuth(true);
                    this.setUser(user);
                    return
                }
            }
            throw('wrong login or password')
        } catch(e) {
            alert(e)
        }
    }

    get isAuth() {
        return localStorage.getItem('auth');
    }
    get user() {
        return this._user
    }
}