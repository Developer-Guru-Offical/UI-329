import { useState } from 'react';
import './Product.css';
import ProductDetails from '../../Components/ProductDetails';
import {productDetails} from '../../Constant/mockData.js';


const Product=()=>{

    const [product,setProduct]=useState(productDetails);

    return (
        <div className='productTitle'>
            <h3>PRODUCT LIST</h3>
            <ProductDetails product={product}/>
        </div>
    )
}

export default Product;
