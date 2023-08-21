import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import Brands from "../Components/Brands";
export default ()=>{
    return(
    <>
        <Navbar/>
        <Sidebar/>
        <div className='main-content'>
            <Brands/>
        </div>
    
    </>
    )
}