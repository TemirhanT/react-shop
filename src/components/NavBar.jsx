import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';

import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { ACCOUNT_ROUTE, AUTHORIZATION_ROUTE, BASKET_ROUTE, MAIN_PAGE_ROUTE } from '../utils/consts';

const NavBar = observer(() => {

    const {user} = useContext(Context);

    const changeTheme = (color) => {
        user.setTheme(color)
    }
    const logOut = () => {
        user.setIsAuth(false);
        user.setUser({});
    }

    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-brand">
                    <NavLink to={MAIN_PAGE_ROUTE} className='navbar-brand-link'>
                        Website
                    </NavLink>
                </div>
                <div className="navbar-right">
                    <div className="navbar-nav">
                        <NavLink to={MAIN_PAGE_ROUTE} className='navbar-nav-link'>
                            Main page
                        </NavLink>
                        {user._isAuth == true
                                ?
                            <><NavLink to={BASKET_ROUTE} className='navbar-nav-link'>
                                Basket
                            </NavLink>
                            <NavLink to={ACCOUNT_ROUTE} className='navbar-nav-link'>
                                Account
                            </NavLink>
                            <div className='navbar-nav-link' onClick={() => logOut()}>Log out</div></>
                                :
                            <NavLink to={AUTHORIZATION_ROUTE} className='navbar-nav-link'>
                                Authorization
                            </NavLink>  
                        }
                    </div>
                    {user.theme == 'light' 
                        ? <label htmlFor='theme-button' onClick={() => changeTheme('dark')}><img className='navbar-right-theme' src='https://cdn-icons-png.flaticon.com/512/6714/6714978.png'/></label>
                        : <label htmlFor='theme-button' onClick={() => changeTheme('light')}><img className='navbar-right-theme' src='https://cdn-icons-png.flaticon.com/128/5007/5007200.png'/></label>
                    }
                    <button className='theme-button' id='theme-button'></button>
                </div>
            </div>
        </div>
    )
})

export default NavBar