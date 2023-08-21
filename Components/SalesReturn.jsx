import { useState } from "react";
import React from "react";
import data1 from "../DATA/data1";
import { Link } from "react-router-dom";

export default ()=>{
  const [SalesReturn] = useState(data1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSalesReturn, setFilteredSalesReturn] = useState(SalesReturn);
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState([]);

  const handleSearch = () => {
    const filteredSalesReturn = SalesReturn.filter(
      (product) =>
        product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered SalesReturn:", filteredSalesReturn);
    setFilteredSalesReturn(filteredSalesReturn);
    
  };

  return (
    <div className="SalesReturn">
        <div className="header">
          <div>
            <h1>Sales Return List</h1>
            <p>Manage Your Returns</p>
          </div>
          <Link to="/form"> <button className="add-btn">+ Add Sales Returns</button> </Link>
         </div>
      <div >
      <input 
            type="text" 
            className="input-area"
            placeholder="search item..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(); // Call the function to update filteredSalesReturn
            }}
            
        />
        <div className="product-label">
        <input type="checkbox"  
        className="checkbox-color"
        checked={allCheckboxesChecked}
        onChange={() => {
          setAllCheckboxesChecked(!allCheckboxesChecked);
          if (!allCheckboxesChecked) {
            const allTrueArray = new Array(filteredSalesReturn.length).fill(true);
            setIndividualCheckboxes(allTrueArray);
          } else {
            setIndividualCheckboxes([]);
          }
        }}
        />
        <h4>Product Name</h4>
        <h4>SKU</h4>
        <h4>Category</h4>
        <h4>Brand</h4>
        <h4>Price</h4>
        <h4>Unit</h4>
        <h4>Qty</h4>
        <h4>Created By</h4>
        <h4>Action</h4>
        

        </div>
      </div>
      {filteredSalesReturn.map((product, index) => (
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
         
          <h4>{product.ProductName}</h4>
          <h4>{product.SKU}</h4>
          <h4>{product.Category}</h4>
          <h4>{product.Brand}</h4>
          <h4>{product.Price}</h4>
          <h4>{product.Unit}</h4>
          <h4>{product.Qty}</h4>
          <h4>{product.CreatedBy}</h4>
          <img src="Captureview.PNG"/>
        </div>
      ))}
    </div>
  );
};


