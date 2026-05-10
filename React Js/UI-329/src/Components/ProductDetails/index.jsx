
import styles from './ProductDetails.module.scss';
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();

    console.log(product, 'product@@#####');

    const redirect = (item) => {
        // console.log(item, 'item@@###')
        localStorage.setItem('product_Details',JSON.stringify(item))
        navigate("/productMoreDetails")
    }

    return <div className={styles.mainWrap}>
        <div className='row mt-4'>
            {product.map((item) => {
                return <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-header text-center'>{item.pname}</div>
                        <div className='card-body text-center'>
                            <p>product ID:{item.p_Id}</p>
                            <p>Code: {item.pcode}</p>
                            <p>Duration: {item.Duration}</p>
                            <p>Mode: {item.Mode}</p>
                        </div>
                        <div className='card-footer text-center'><button className='btn btn-primary' onClick={() => redirect([item])}>View Details</button></div>
                    </div>
                </div>
            })}
        </div>

    </div>
}

export default ProductDetails;