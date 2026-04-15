//import './Home.css'
import styles from './Home.module.scss';

const Home = () => {

    return (
        <div className={styles.mainWrapper}>
            <p className={`text-center ${styles.textTitleHome}`}>This Is The Home Page</p>
            <p className={`${styles.textTitleHome} ${styles.textTitleHome1}`}>This Is The Home Page</p>
         </div>

    )

}

export default Home;