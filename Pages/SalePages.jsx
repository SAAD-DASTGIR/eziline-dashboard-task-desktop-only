import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import Sales from "../Components/Sales";
export default ()=>{
    return(
        <>
            <Navbar/>
            <Sidebar/>
            <div className='main-content'>
                <Sales/>
            </div>
            
        </>
    )

}