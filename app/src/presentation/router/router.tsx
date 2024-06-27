import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts";
import { ROUTE_ECOMMERCE,ROUTE_OTHERS } from "../../common/constants";
import { EcommerceControlPage } from "../pages";
import { Route } from "../../interfaces";


//TODO 
//* add new pages

interface MenuRoute extends Route{
    component:HTMLElement | any
}

const menuRoutes:MenuRoute[] = [
    {...ROUTE_ECOMMERCE,component:<EcommerceControlPage/>},
    {...ROUTE_OTHERS,component:<EcommerceControlPage/>},
]

console.log(menuRoutes);


export const router = createBrowserRouter([
    {
        path:'/',
        element:<DashboardLayout/>,
        children:[
            ...menuRoutes.map(route => ({
                path:route.to,
                element:route.component
            })),
            {
                path:'',
                element: <Navigate to={menuRoutes[0].to}/>
            }
        ]
    }
])