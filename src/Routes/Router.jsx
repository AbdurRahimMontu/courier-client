import React, { Suspense } from 'react';
import {createBrowserRouter} from "react-router"

import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home/Home';

const Router = createBrowserRouter([
    {
         path:"/",
         element:<MainLayout></MainLayout>,
         children:[
            {
             path:"/",
             element:
                <Home></Home>,
           
             
             
            }
         ]
         
    }
])

export default Router;