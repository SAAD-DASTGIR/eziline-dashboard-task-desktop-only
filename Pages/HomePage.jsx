import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import MainDashboard from "../Components/MainDashboard";
export default ()=>{
    return(
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='main-content'>
            <MainDashboard/>
            </div>
    </div>)
}