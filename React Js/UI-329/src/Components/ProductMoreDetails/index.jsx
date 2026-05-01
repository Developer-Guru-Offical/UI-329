
import Header from '../Header';
import Footer from '../Footer';
//import { styles } from './ProductMoreDetails.module.scss';
import styles from './ProductMoreDetails.module.scss';

const ProductMoreDetails = () => {

    const p_id= localStorage.getItem('product_Id');
    console.log(p_id,'getiing product ID');

    return <div className={styles.mainWrap}>
        <h3 className='text-center text-white'> View Product Details for Product_ID {p_id}</h3>
        </div>




}

export default ProductMoreDetails;