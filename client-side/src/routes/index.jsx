import { createBrowserRouter, redirect } from "react-router-dom"
import Homepage from "../pages/HomePage"
import Layout from "../components/Layout"
import DetailProduct from "../pages/DetailProduct"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: 'customer/:id',
                element: <DetailProduct />
            }
        ]
    }
])

export default router
