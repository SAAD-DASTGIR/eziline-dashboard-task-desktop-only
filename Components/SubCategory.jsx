import React, { useState } from "react";
import SubCategoryData from "../DATA/SubCategoryData"
import { Link } from "react-router-dom";
export default()=>{
    const [subcategorydata]=useState(SubCategoryData)
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(subcategorydata);
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const [individualCheckboxes, setIndividualCheckboxes] = useState([]);
    const handleSearch = () => {
      const filteredProducts = subcategorydata.filter(
        (product) =>
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Filtered Products:", filteredProducts);
      setFilteredProducts(filteredProducts);
      
    }
    return(
        <div className="subcategory">
          <div className="header">
          <div>
            <h1>Product Sub Category list</h1>
            <p>View/Search product Category</p>
          </div>
          <Link to="/form"><button className="add-btn">+ Add New Product</button></Link>
         </div>
         <input 
            type="text" 
            className="input-area"
            placeholder="search item..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(); 
            }}
        />
            <div className="subcategory-top">
            <input type="checkbox"
             className="checkbox-color"
             checked={allCheckboxesChecked}
             onChange={() => {
               setAllCheckboxesChecked(!allCheckboxesChecked);
               if (!allCheckboxesChecked) {
                 const allTrueArray = new Array(filteredProducts.length).fill(true);
                 setIndividualCheckboxes(allTrueArray);
               } else {
                 setIndividualCheckboxes([]);
               }
             }} />
            <h4>Image</h4>
            <h4>Category</h4>
            <h4>Parent Category</h4>
            <h4>Category Code</h4>
            <h4>Description</h4>
            <h4>Created By</h4>
            <h4>Action</h4>

        </div>
        {filteredProducts.map((product,index) => (
        <div className="product-row" key={product.id}>
          <input type="checkbox" 
          className="checkbox-color" 
          checked={individualCheckboxes[index]}
          onChange={() => {
            const updatedCheckboxes = [...individualCheckboxes];
            updatedCheckboxes[index] = !updatedCheckboxes[index];
            setIndividualCheckboxes(updatedCheckboxes);
          }}/>
          <h4>{product.image}</h4>
          <h4>{product.category}</h4>
          <h4>{product.parentcategory}</h4>
          <h4>{product.categorycode}</h4>
          <h4>{product.description}</h4>
          <h4>{product.createdby}</h4>
          <img src="Captureview.PNG"/>
        </div>
      ))}
        </div>
    )
}