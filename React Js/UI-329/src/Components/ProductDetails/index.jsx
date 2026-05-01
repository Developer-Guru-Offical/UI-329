
import styles from './ProductDetails.module.scss';
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();

    console.log(product, 'product@@#####');

    const redirect = (P_Id) => {
        //console.log(P_Id, 'P_Id@@###')
        localStorage.setItem('product_Id',P_Id)
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
                        <div className='card-footer text-center'><button className='btn btn-primary' onClick={() => redirect(item.p_Id)}>View Details</button></div>
                    </div>
                </div>
            })}
        </div>

    </div>
}

export default ProductDetails;