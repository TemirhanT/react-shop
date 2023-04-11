import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '..';
import { authRoutes, nonAuthRoutes, publicRoutes } from '../routes';
import { MAIN_PAGE_ROUTE } from '../utils/consts';

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return(
        <Routes>
            {user._isAuth == true ? 
                authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )
            :
                publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} exact/>
            )}
            <Route path="*" element={<Navigate to={MAIN_PAGE_ROUTE} />}/>
        </Routes>
    )
})

export default AppRouter;