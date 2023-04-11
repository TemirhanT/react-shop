import Account from "./pages/Account"
import Authorization from "./pages/Authorization"
import Basket from "./pages/Basket"
import MainPage from "./pages/MainPage"
import Registration from "./pages/Registration"
import SupplePage from "./pages/SupplePage"
import { ACCOUNT_ROUTE, AUTHORIZATION_ROUTE, BASKET_ROUTE, MAIN_PAGE_ROUTE, REGISTRATION_ROUTES, SUPPLE_ROUTE } from "./utils/consts"


export const authRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: <MainPage/>
    },
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    },
    {
        path: SUPPLE_ROUTE + '/:id',
        Component: <SupplePage/>
    },
    {
        path: ACCOUNT_ROUTE,
        Component: <Account/>
    }
]

export const publicRoutes = [
    {
        path: AUTHORIZATION_ROUTE,
        Component: <Authorization/>
    },
    {
        path: REGISTRATION_ROUTES,
        Component: <Registration/>
    },
    {
        path: MAIN_PAGE_ROUTE,
        Component: <MainPage/>
    },
    {
        path: SUPPLE_ROUTE + '/:id',
        Component: <SupplePage/>
    }
]