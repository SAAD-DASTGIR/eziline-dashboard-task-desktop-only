import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import Invoice from "../Components/Invoice";
export default ()=>{
    return(
        <>
         <Navbar/>
         <Sidebar/>
         <div className='main-content'>
            <Invoice/>
            </div>
        
        </>
    )
}