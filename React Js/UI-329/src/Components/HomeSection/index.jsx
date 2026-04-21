import styles from './HomeSection.module.scss';

const HomeSection=({titleName,courseName,cricket})=>{
    //console.log(titleName);
    //console.log('courseName@@@',courseName);
     console.log('cricket@@##',cricket);
    return (
        <div className={styles.homeSectionMain}>
            <h3>{titleName}</h3>
            <h3> Cousre Name</h3>
            <li className='text-white'>{courseName[0]}</li>
            <li className='text-white'>{courseName[1]}</li>
            <li className='text-white'>{courseName[2]}</li>
            <li className='text-white'>{courseName[3]}</li>
            <li className='text-white'>{courseName[4]}</li>
            <h3> Cricket Teams </h3>
            <li className='text-white'>{cricket.MI}</li>
             <li className='text-white'>{cricket.CSK}</li>
              <li className='text-white'>{cricket.RCB}</li>
        </div>
    )
}

export default HomeSection;