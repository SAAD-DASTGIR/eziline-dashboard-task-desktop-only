import React, { useState } from "react";
import Brandsdata from "../DATA/BrandsData";
import { Link } from "react-router-dom";
export default()=>{
    const [branddata]=useState(Brandsdata)
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const [individualCheckboxes, setIndividualCheckboxes] = useState([]);

return(
    <div className="brands">
      <div className="header">
          <div>
            <h1>Brand List</h1>
            <p>Manage your Brand</p>
          </div>
          <Link to="/form"><button className="add-btn">+ Add Brand</button></Link>
         </div>
        <div className="brands-top">
            <input type="checkbox" 
            className="checkbox-color"
            checked={allCheckboxesChecked}
            onChange={() => {
              setAllCheckboxesChecked(!allCheckboxesChecked);
              if (!allCheckboxesChecked) {
                const allTrueArray = new Array(branddata.length).fill(true);
                setIndividualCheckboxes(allTrueArray);
              } else {
                setIndividualCheckboxes([]);
              }
            }}
            />
            <h4>Image</h4>
            <h4>Brand Name</h4>
            <h4>Brand Description</h4>
            <h4>Action</h4>
        </div>
        {branddata.map((product,index) => (
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
          <h4>{product.BrandName}</h4>
          <h4>{product.BrandDescription}</h4>
          <img src="Captureview.PNG"/>        </div>
      ))}
    </div>
)
}