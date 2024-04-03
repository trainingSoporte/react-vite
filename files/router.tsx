import { Navigate, createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts";
import { EcommerceControlPage } from "../pages";

//TODO 
//* add new pages

export const menuRoutes = [
    {
      to: "/ecommerce-menu-options",
      icon: "fa-solid fa-wrench",
      title: "Ecommerce",
      description: "Ecommerce controls",
      component: <EcommerceControlPage/>
    },
    {
      to: "/other-menu-options",
      icon: "fa-solid fa-wrench",
      title: "title other",
      description: "description other",
      component:<EcommerceControlPage/>
    }
];

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