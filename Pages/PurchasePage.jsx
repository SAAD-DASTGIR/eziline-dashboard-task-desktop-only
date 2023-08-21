import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import Purchase from "../Components/Purchase";

export default ()=>{
    return(
        <div>
        <Navbar/>
        <Sidebar/>
        <div className='main-content'>
        <Purchase/>
        </div>
    </div>
)
    
}