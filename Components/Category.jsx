import React, { useState } from "react";

// import data1 from "./data1";
import CategoryData from "../DATA/CategoryData";
import { Link } from "react-router-dom";
// import Products from "./Products";
export default()=>{
    const [category] = useState(CategoryData);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredcategory, setFilteredcategory] = useState(category);
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const [individualCheckboxes, setIndividualCheckboxes] = useState([]);
  
    const handleSearch = () => {
      const filteredcategory = category.filter(
        (product) =>
          product.CategoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Filtered category:", filteredcategory);
      setFilteredcategory(filteredcategory);
      
    };
return(
    <div className="category">
        <div className="header">
        <div>
            <h2>Product Category List</h2>
            <p>View/Search product Category</p>
        </div>
        <Link to="/form"><button className="add-btn">+ Add New Category</button></Link>
      </div>
        <input 
            type="text" 
            placeholder="search item..."
            className="input-area"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(); // Call the function to update filteredProducts
            }}
            />
        <div className="category-top">

         <input type="checkbox"
          className="checkbox-color"
          checked={allCheckboxesChecked}
          onChange={() => {
            setAllCheckboxesChecked(!allCheckboxesChecked);
            if (!allCheckboxesChecked) {
              const allTrueArray = new Array(filteredcategory.length).fill(true);
              setIndividualCheckboxes(allTrueArray);
            } else {
              setIndividualCheckboxes([]);
            }
          }} />
        <h4>Category Name</h4>
        <h4>Category Code</h4>
        <h4>Description</h4>
        <h4>Created By</h4>
        <h4>Action</h4>
        </div>
        {filteredcategory.map((product,index) => (
        <div className="product-row" key={product.id}>
          <input type="checkbox" 
           className="checkbox-color"
           checked={individualCheckboxes[index]}
           onChange={() => {
             const updatedCheckboxes = [...individualCheckboxes];
             updatedCheckboxes[index] = !updatedCheckboxes[index];
             setIndividualCheckboxes(updatedCheckboxes);
           }}
          />
          <h4>{product.CategoryName}</h4>
          <h4>{product.CategoryCode}</h4>
          <h4>{product.Description}</h4>
          <h4>{product.CreatedBy}</h4>
          <img src="Captureview.PNG"/>
        </div>
      ))}
    </div>
)

}