import React from 'react';
import { useSelector } from 'react-redux';


const ProductList = () => {
    const products = useSelector((state) => state);
    console.log(products);
  return (
    <div className='ui grid container'>
        <h1>ProductList</h1>
    </div>
  )
}

export default ProductList