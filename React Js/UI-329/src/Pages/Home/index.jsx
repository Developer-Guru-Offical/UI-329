//import './Home.css'
import styles from './Home.module.scss';
import HomeSection from '../../Components/HomeSection';

const Home = () => {
 let name="THIS IS THE HOME SECTION";

    return (
        <div className={styles.mainWrapper}>
            <HomeSection titleName={name}/>
            {/* <p className={`text-center ${styles.textTitleHome}`}>This Is The Home Page</p>
            <p className={`${styles.textTitleHome} ${styles.textTitleHome1}`}>This Is The Home Page</p> */}
         </div>

    )

}

export default Home;