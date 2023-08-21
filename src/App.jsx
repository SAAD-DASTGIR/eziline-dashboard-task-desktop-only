import { useState,useNavigate } from 'react'
import ProductList from '../Components/Product-list'
import Products from '../Components/Products'
import data1 from '../DATA/data1';
import Category from '../Components/Category';
import Brands from '../Components/Brands';
import SubCategory from '../Components/SubCategory';
import Sidebar from '../Components/SIdebar';
import Navbar from '../Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productpage from '../Pages/Productpage';
import HomePage from '../Pages/HomePage';
import CategoryPage from '../Pages/CategoryPage';
import MainDashboard from '../Components/MainDashboard';
import Graph from '../Components/Graph';
import Sales from '../Components/Sales';
import Invoice from '../Components/Invoice';
import { Outlet } from 'react-router-dom';
import BrandPage from '../Pages/BrandPage';
import SubCategoryPage from '../Pages/SubCategoryPage';
import SalePages from '../Pages/SalePages';
import InvoicePage from '../Pages/InvoicePage';
import Import from '../Components/Import';
import ImportPage from '../Pages/ImportPage';
import SalesReturnPage from '../Pages/SalesReturnPage';
import PurchasePage from '../Pages/PurchasePage';
import LoginPage from '../Pages/LoginPage';
import FormPage from '../Pages/FormPage';
function App() {
  // const [projects] = useState(data1); // Use the imported data array

  // const navigate = useNavigate();

  return (
    <>
      <Router>
        <div>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<HomePage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/brands" element={<BrandPage/>}/>
        <Route path="/subcategory" element={<SubCategoryPage/>}/>
        <Route path="/import" element={<ImportPage/>}/>
        <Route path="/sales" element={<SalePages/>}/>
        <Route path="/invoices" element={<InvoicePage/>}/>
        <Route path="/salesreturn" element={<SalesReturnPage/>}/>
        <Route path="/purchase" element={<PurchasePage/>}/>
        <Route path="/purchasereturn" element={<PurchasePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        

        </Routes>
        <Outlet /> 
        </div>
      </Router>
      
      {/* <Navbar/>
        <Sidebar/>
        <div className='main-content'>
        <Invoice/>
        </div> */}
      
        
     
    </>
  )
}

export default App
