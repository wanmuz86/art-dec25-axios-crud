import { createBrowserRouter } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductCreate from "./pages/ProductCreate";
import ProductDetails from "./pages/ProductDetails";
import ProductEdit from "./pages/ProductEdit";
import Layout from "./Layout";

export const router = createBrowserRouter([
    {
        path:'/', 
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<ProductList/>
            },
            {
                path:"products/new",
                element:<ProductCreate/>
            },
            {
                path:"products/:id",
                element:<ProductDetails/>
            },
            {
                path:"products/:id/edit",
                element:<ProductEdit/>
            }
        ]
    }
])