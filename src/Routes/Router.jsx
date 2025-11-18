import React, { Suspense } from 'react';
import {createBrowserRouter} from "react-router"

import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';
import Coverage from '../Pages/Home/Coverage/Coverage';

const Router = createBrowserRouter([
    {
         path:"/",
         element:<MainLayout></MainLayout>,
         children:[
            {
             path:"/",
             element:
                <Home></Home>,
           
             
             
            },{
                path:"/register",
                element:<Register></Register>
            }
            ,{
                path:"/coverage",
                element:<Coverage></Coverage>,
    loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
            }
         ]
         
    }
])

export default Router;