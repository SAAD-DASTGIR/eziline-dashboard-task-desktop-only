import React, { useState } from "react";
import Salesdata from "../DATA/Salesdata";
import { Link } from "react-router-dom";
export default ()=>{
  const [purchasedata]=useState(Salesdata)
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(purchasedata);
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState([]);

  const handleSearch = () => {
    const filteredProducts = purchasedata.filter(
      (product) =>
        product.costumername.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Products:", filteredProducts);
    setFilteredProducts(filteredProducts);
    
  };
    return(
        <div className="purchase">
            
          <div className="header">
          <div>
            <h1>purchase List</h1>
            <p>Manage your purchase</p>
          </div>
          <Link to="/form"> <button className="add-btn">+ Add purchase</button></Link>
         </div>
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
            <div className="purchase-top">
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
            <h4>Date</h4>
            <h4>Customer Name</h4>
            <h4>Reference</h4>
            <h4>Status</h4>
            <h4>Payment</h4>
            <h4>Total</h4>
            <h4>Due</h4>

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
           }}
          />
          <h4>{product.date}</h4>
          <h4>{product.costumername}</h4>
          <h4>{product.reference}</h4>
          <h4>{product.status}</h4>
          <h4>{product.payment}</h4>
          <h4>{product.total}</h4>
          <h4>{product.paid}</h4>
          <h4>{product.due}</h4>
        </div>
      ))}
        </div>
    )
    
}