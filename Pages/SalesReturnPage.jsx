import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import SalesReturn from "../Components/SalesReturn";
export default ()=>{
    return(
        <>
            <Navbar/>
            <Sidebar/>
            <div className='main-content'>
                <SalesReturn/>
            </div>
        </>
    )
}