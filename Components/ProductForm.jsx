import React, { useState } from 'react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [brand, setBrand] = useState('');
  const [unit, setUnit] = useState('');
  const [sku, setSku] = useState('');
  const [minQty, setMinQty] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [tax, setTax] = useState('');
  const [discountType, setDiscountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}
    className='product-form'>
      <label>
        Product Name:
        <textarea
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {/* Add category options here */}
        </select>
      </label>

      <label>
        Subcategory:
        <select
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          {/* Add subcategory options here */}
        </select>
      </label>

      <label>
        Brand:
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>

      <label>
        Unit:
        <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} />
      </label>

      <label>
        SKU:
        <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} />
      </label>

      <label>
        Minimum Qty:
        <input
          type="number"
          value={minQty}
          onChange={(e) => setMinQty(e.target.value)}
        />
      </label>

      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <label>
        Tax:
        <input type="text" value={tax} onChange={(e) => setTax(e.target.value)} />
      </label>

      <label>
        Discount Type:
        <input
          type="text"
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
