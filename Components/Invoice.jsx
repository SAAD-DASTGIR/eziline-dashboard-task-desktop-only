import React, { useState } from "react";
import InvoicesData from "../DATA/InvoicesData";
export default ()=>
{
    const [invoice]=useState(InvoicesData)
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(invoice);
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const [individualCheckboxes, setIndividualCheckboxes] = useState([]);
  
    const handleSearch = () => {
      const filteredProducts = invoice.filter(
        (product) =>
          product.CustomerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Filtered Products:", filteredProducts);
      setFilteredProducts(filteredProducts);
      
    };
    return(
        <div className="invoice">
            <div className="header">
          <div>
            <h1>Invoice Report</h1>
            <p>Manage your Invoice Report</p>
          </div>
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
            <div className="sales-top">
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
            <h4>Invoice Number</h4>
            <h4>Custumer Name</h4>
            <h4>Due Date</h4>
            <h4>Amount</h4>
            <h4>Paid</h4>
            <h4>Amount Due</h4>
            <h4>Status</h4>

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
          <h4>{product.invoiceNumber}</h4>
          <h4>{product.CustomerName}</h4>
          <h4>{product.DueDate}</h4>
          <h4>{product.Amount}</h4>
          <h4>{product.Paid}</h4>
          <h4>{product.AmountDue}</h4>
          <h4>{product.Status}</h4>
        </div>
      ))}
        </div>
    )
}