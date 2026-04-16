import styles from './HomeSection.module.scss';

const HomeSection=({titleName})=>{
    //console.log(titleName);
    return (
        <div className={styles.homeSectionMain}>
            <h3>{titleName}</h3>
        </div>
    )
}

export default HomeSection;