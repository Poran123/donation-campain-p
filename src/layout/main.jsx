import { Outlet } from "react-router-dom"
import Hero from "../components/hero"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Layout = () => {
    const [outletData, setOutletData] = useState([]);
    return (
        <div>
            <Hero setOutletData = {setOutletData}/>
            <Outlet context={[outletData, setOutletData]}/>
            <ToastContainer />
        </div>
    )
}

export default Layout