import React, { useState } from "react";
import Expireditems from "../DATA/ExpiredItems";
import  RecentProductData from "../DATA/RecentProductData"
export default ()=>{
    const [expireditem]=useState(Expireditems)
    const [recentproductdata]=useState(RecentProductData)
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const [individualCheckboxes, setIndividualCheckboxes] = useState([]);
    const [allCheckboxesChecked1, setAllCheckboxesChecked1] = useState(false);
    const [individualCheckboxes1, setIndividualCheckboxes1] = useState([]);
    return(
        <div className="main-dashboard">
            <div className="dashboard-cont1">
                <div className="dashboard-cont1-purchase">
                    <img className="img-dash"src="purchase-icon.PNG" alt="" />
                    <h2>$307144</h2>
                    <p>Total Purchase Due</p>
                </div>
                <div>
                    <img className="img-dash" src="saledue-icon.PNG" alt="" />
                    <h2>$4385</h2>
                    <p>Total Sales Due</p>

                </div>
                <div>
                    <img className="img-dash" src="sale-amount-icon.PNG" alt="" />
                    <h2>$385656.5</h2>
                    <p>Total Sale Amount</p>

                </div>
                <div>
                    <img className="img-dash" src="total-sale-amount-red.PNG" alt="" />
                    <h2>$40000</h2>
                    <p>Total Sale Amount</p>
                </div>
                
            </div>

            <div className="dashboard-cont2">
                <div className="customers">
                    <h2>100</h2>
                    <img className="customerorange" src="customerorange.PNG" alt="" />
                    <p className="paracustomer">Customers</p>
                </div>
                <div className="Suppliers">
                    <h2>100</h2>
                    <img className="customerorange" src="blueuppliers.PNG" alt="" />
                    <p className="paracustomer">Suppliers</p>
                </div>
                <div className="Purchase">
                    <h2>100</h2>
                    <img className="customerorange" src="blackinvoice.PNG" alt="" />
                    <p className="paracustomer">Purchase Invoice</p>
                </div>
                <div className="Sales">
                    <h2>105</h2>
                    <img className="customerorange" src="green-invoice.PNG" alt="" />
                    <p className="paracustomer">Sales Invoice</p>
                </div>
            </div>
        <div className="last">
        <div className="header">
          <div>
            <h1>Recently Added Products</h1>
          </div>
         </div>
        <div className="product-label">
        <input type="checkbox" 
          className="checkbox-color"
          checked={allCheckboxesChecked}
          onChange={() => {
            setAllCheckboxesChecked(!allCheckboxesChecked);
            if (!allCheckboxesChecked) {
              const allTrueArray = new Array(expireditem.length).fill(true);
              setIndividualCheckboxes(allTrueArray);
            } else {
              setIndividualCheckboxes([]);
            }
          }}/>
        <h4>S.no</h4>
        <h4>Product</h4>
        <h4>Price</h4>
      </div>

      <div className="product-list">
        {recentproductdata.map((product,index) => (
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
            <h4>{product.id}</h4>
            <h4>{product.product}</h4>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
    <div className="header">
          <div>
            <h1>Expired Products</h1>
          </div>
         </div>
    <div className="product-label">
        <input type="checkbox" 
         className="checkbox-color"
         checked={allCheckboxesChecked1}
         onChange={() => {
           setAllCheckboxesChecked1(!allCheckboxesChecked1);
           if (!allCheckboxesChecked1) {
             const allTrueArray = new Array(recentproductdata.length).fill(true);
             setIndividualCheckboxes1(allTrueArray);
           } else {
             setIndividualCheckboxes1([]);
           }
         }}
        />
        <h4>Product Name</h4>
        <h4>Product Code</h4>
        <h4>Brand Name</h4>
        <h4>Category Name</h4>
        <h4>Expiry Date</h4>
      </div>

      <div className="product-list">
        {expireditem.map((product,index) => (
          <div className="product-row" key={product.id}>
            <input type="checkbox" 
             className="checkbox-color" 
             checked={individualCheckboxes1[index]}
             onChange={() => {
               const updatedCheckboxes = [...individualCheckboxes1];
               updatedCheckboxes[index] = !updatedCheckboxes[index];
               setIndividualCheckboxes1(updatedCheckboxes);
             }}
         
            />
            <h4>{product.productname}</h4>
            <h4>{product.productcode}</h4>
            <h4>{product.brandname}</h4>
            <h4>{product.Categoryname}</h4>
            <h4>{product.ExpiryDate}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
       