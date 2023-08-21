import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import SubCategory from "../Components/SubCategory";
export default ()=>{
    return(
        <>
            <Navbar/>
            <Sidebar/>
            <div className='main-content'>
                <SubCategory/>
            </div>
            
        </>
    )
}