//import './Home.css'
import styles from './Home.module.scss';
import HomeSection from '../../Components/HomeSection';
import CurseSection from '../../Components/CourseSection/Index';

const Home = () => {
    let name = "THIS IS THE HOME SECTION";
    let courseName = ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT JS'];
    let cricket = { 'MI': 'Mumbai', 'CSK': 'Chennai', 'RCB': 'Royal Challenge Bangluru' }

    const courseDetails = [
        {
            "name": "Full Stack",
            "image": "https://via.placeholder.com/150",
            "buttonName": "View Details"
        },
        {
            "name": "MEAN Stack",
            "image": "https://via.placeholder.com/150",
            "buttonName": "View Details"
        },
        {
            "name": "MERN Stack",
            "image": "https://via.placeholder.com/150",
            "buttonName": "View Details"
        },
        {
            "name": "Agentic AI",
            "image": "https://via.placeholder.com/150",
            "buttonName": "View Details"
        },

    ]

    const clickMe = () => {
        console.log('click Me calling...!');
    }

    return (
        <div className={styles.mainWrapper}>
            <HomeSection titleName={name} courseName={courseName} cricket={cricket} />
            <CurseSection courseDetails={courseDetails} clickMe={clickMe}/>
            {/* <p className={`text-center ${styles.textTitleHome}`}>This Is The Home Page</p>
            <p className={`${styles.textTitleHome} ${styles.textTitleHome1}`}>This Is The Home Page</p> */}
        </div>

    )

}

export default Home;