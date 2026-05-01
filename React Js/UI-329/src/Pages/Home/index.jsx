//import './Home.css'
import { useState,useEffect } from 'react';
import styles from './Home.module.scss';
import HomeSection from '../../Components/HomeSection';
import CurseSection from '../../Components/CourseSection/Index';
import {courseDetails,studDetails} from '../../Constant/mockData.js';

const Home = () => {

   const [value,setValue]=useState(false);
   const [courseDetailss,setCourseDetailss]=useState(courseDetails);
   
    let name = "THIS IS THE HOME SECTION";
    let courseName = ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT JS'];
    let cricket = { 'MI': 'Mumbai', 'CSK': 'Chennai', 'RCB': 'Royal Challenge Bangluru' }
    
    useEffect(()=>{
      console.log('UseEffect Calling...!');
    },[]);
 
    const clickMe = () => {
        setValue(true);
        console.log('click Me calling...!');
    }

    return (
        <div className={styles.mainWrapper}>
            <HomeSection titleName={name} courseName={courseName} cricket={cricket} />
            <CurseSection courseDetails={courseDetailss} clickMe={clickMe}/>
            {/* <p className={`text-center ${styles.textTitleHome}`}>This Is The Home Page</p>
            <p className={`${styles.textTitleHome} ${styles.textTitleHome1}`}>This Is The Home Page</p> */}
        </div>

    )

}

export default Home;