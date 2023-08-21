import React from "react";
import Category from "../Components/Category";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
export default ()=>{
    return(
        <div>
            <Navbar/>
            <Sidebar/>
            <div className='main-content'>
            <Category/>
            </div>
        </div>
    )
}