import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h4 className="sidebar-heading">Main</h4>
        <ul className="sidebar-menu">
          <li className="li-styling">
          <Link to="/dashboard">Dashboard
          </Link></li>
        </ul>
      </div>
      <div>
        <h4 className="sidebar-heading">Products and Category</h4>
        <ul className="sidebar-menu">
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
          <Link to="/form">Create Products</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
          <Link to="/brands">Brands</Link>
          </li>
          <li>
          <Link to="/subcategory"> SubCategory </Link>
          </li>
          <li>
          <Link to="/import">Import Products </Link>
          </li>
        </ul>
      </div>
      <h3 className="sidebar-heading">Sales</h3>
      <ul className="sidebar-menu">
        <li>
        <Link to="/sales">Sales</Link>
        </li>
        <li>
        <Link to="/invoices">Invoices
        </Link>
        </li>
        <li>
        <Link to="/salesreturn">Sale Returns </Link>
        </li>
      </ul>
      <h3 className="sidebar-heading">Purchases</h3>
      <ul className="sidebar-menu">
        <li> 
        <Link to="/purchase"> Purchases </Link>
        </li>
        <li>
        <Link to="/purchasereturn"> Purchase Return </Link>
        </li>
      </ul>
      <h3 className="sidebar-heading">LOG OUT</h3>
      <ul className="sidebar-menu">
      <li>
        <Link to="/login"> Log Out </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
