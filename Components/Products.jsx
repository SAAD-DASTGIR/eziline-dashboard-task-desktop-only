import { useState } from "react";
import React from "react";
import data1 from "../DATA/data1";
import { Link } from "react-router-dom";

const Products = () => {
  const [products] = useState(data1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState([]);

  const handleSearch = () => {
    const filteredProducts = products.filter(
      (product) =>
        product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Products:", filteredProducts);
    setFilteredProducts(filteredProducts);
    
  };

  return (
    <div className="products">
        <div className="header">
          <div>
            <h1>Product List</h1>
            <p>Manage Your Projects</p>
          </div>
          <Link to="/form"><button className="add-btn">+ Add New Product</button></Link>
         </div>
      <div >
      <input 
            type="text" 
            className="input-area"
            placeholder="search item..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(); // Call the function to update filteredProducts
            }}
            
        />
        <div className="product-label">
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
      {filteredProducts.map((product, index) => (
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

export default Products;
