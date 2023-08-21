import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SIdebar";
import Products from "../Components/Products";
export default ()=>{
return(
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='main-content'>
        <Products/>
        </div>
    </div>
)
}