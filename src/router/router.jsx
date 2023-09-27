import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/main";
import Home from "../pages/home";
import DonationDetails from "../pages/donation-details";
import Donations from "../pages/donations";
import Statistics from "../pages/statistics";
import Error from "../pages/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/donation",
                element: <Donations/>
            },
            {
                path: "/donation/:id",
                element: <DonationDetails/>
            },
            {
                path: "/statistics",
                element: <Statistics/>
            },
            {
                path: "*",
                element: <Error/>
            }
        ]
    }
])

export default router