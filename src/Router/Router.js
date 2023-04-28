import About from "../About/About";
import SignUp from "../About/SignUP/SignUp";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import SignIn from "../SignIn/SignIn";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Main");
const { default: Home } = require("../Home/Home");


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/service',
                element:<Service></Service>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/portfolio',
                element:<Portfolio></Portfolio>
            },
            {
                path:'/signup',
                elements:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<SignIn></SignIn>
            }
        ]

        

    },
    
])