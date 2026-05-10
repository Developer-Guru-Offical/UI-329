
import Header from '../Header';
import Footer from '../Footer';
//import { styles } from './ProductMoreDetails.module.scss';
import styles from './ProductMoreDetails.module.scss';
import { useEffect, useState } from 'react';

const ProductMoreDetails = () => {

    const [getproductDetails, setProductDetails] = useState({});

    console.log(getproductDetails, 'getproductDetails@@###');

    useEffect(() => {
        console.log('UeeEffect Calling...!!!');
        const product_Details = localStorage.getItem('product_Details');
        console.log(product_Details,'product_Details@@###');
        if (product_Details) {
            setProductDetails(JSON.parse(product_Details));
        }
    }, []);

    return <div className={styles.mainWrap}>
        <h3 className='text-center text-white'> View Product Details for Product_ID </h3>
        <div className='row mt-4'>
            {getproductDetails.length>0 ?
            getproductDetails.map((item, index) => {
                return <div className='col-md-3' key={index}>
                    <div className='card'>
                        <div className='card-header text-center'>{item.pname}</div>
                        <div className='card-body text-center'>
                            <p>product ID:{item.p_Id}</p>
                            <p>Code: {item.pcode}</p>
                            <p>Duration: {item.Duration}</p>
                            <p>Mode: {item.Mode}</p>
                        </div>
                        <div className='card-footer text-center'><button className='btn btn-primary' onClick={() => redirect(item)}>View Details</button></div>
                    </div>
                </div>
            }):'Record Not Availble'}
        </div> 
    </div>




}

export default ProductMoreDetails;