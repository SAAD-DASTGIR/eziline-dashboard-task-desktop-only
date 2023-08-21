import React from "react";

import ProductForm from "../Components/ProductForm";
import Navbar from "../Components/Navbar"
import Sidebar from"../Components/SIdebar"
export default ()=>{
    return(
        <>
            
            <Navbar/>
            <Sidebar/>
             <div className='main-content'>
             <ProductForm/>
            </div>
        </>
    )
}