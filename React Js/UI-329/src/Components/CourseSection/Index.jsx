
import styles from './CourseSection.module.scss';
import fullStackImg from '../../assets/Full-Stack-Developer.jpg';

const CourseSection = ({ courseDetails,clickMe }) => {

   console.log(courseDetails, 'courseDetails@@####');

   // const clickMe=()=>{
   //     console.log('click Me calling...!');
   // }

   return (
      <div className={styles.courseMainWrap}>
         <div className={styles.titleSection}> Our Courses </div>
         <div className='row'>
            {courseDetails.map((cdetails, i) => {
               return <div className='col-md-3' key={i}>
                  <div className='card'>
                     <div className='card-header text-center'>{cdetails.name}</div>
                     <div className={`card-body ${styles.fullStackImg}`}>
                        <img src={fullStackImg} style={{ height: '200', width: '200px' }} />
                     </div>
                     <div className='card-footer'>
                        <button className='btn btn-primary d-block m-auto' onClick={()=>clickMe()}>{cdetails.buttonName}</button>
                     </div>
                  </div>
               </div>
            })}






         </div>
      </div>
   )


}

export default CourseSection;