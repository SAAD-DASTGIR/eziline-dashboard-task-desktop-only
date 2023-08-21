import React from "react";
import Import from "../Components/Import";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
export default ()=>{
    return(
        <>
            <Navbar/>
            <Sidebar/>
             <div className='main-content'>
                <Import/>
            </div>
            
        </>
    )
}