import { createBrowserRouter, redirect } from "react-router-dom"
import Layout from "../component/Layout"
import GamesPage from "../pages/GamesPage"
import LoginPage from "../pages/LoginPage"
import GenrePage from "../pages/GenrePage"
import AddGame from "../pages/AddGamePage"
import AddGenre from "../pages/AddGenrePage"
import EditGame from "../pages/EditGamePage"
import EditGenre from "../pages/EditGenrePage"
import RegisterPage from "../pages/RegisterPage"


const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        loader: () => {
            if(!localStorage.getItem('access_token')) throw redirect('/login')
            return null
        },
        children: [
            {
                path: '/',
                element: <GamesPage />
            },
            {
                path: '/genre',
                element:<GenrePage />
            },
            {
                path: '/addGame',
                element: <AddGame />
            },
            {
                path: '/addGenre',
                element: <AddGenre />
            },
            {
                path: '/addAdmin',
                element: <RegisterPage />
            },
            {
                path: '/editGame/:id',
                element: <EditGame />
            }, 
            {
                path: '/editGenre/:id',
                element: <EditGenre />
            }
        ]
    },
    {
        path: 'login',
        element: <LoginPage />,
        loader: () => {
            if(localStorage.getItem('access_token')) throw redirect('/')
            return null
        }
    }
])

export default router
