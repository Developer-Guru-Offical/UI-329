
import { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import {getUSerDetails} from '../../Services/api';

const Gallery = () => {

    const[userData,setUserData]=useState();
    console.log('userData@@@@@@',userData);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try {
            const response = await getUSerDetails();
            if (response.status === 200) {
                console.log(response.data);
                setUserData(response.data);

            }
        }
        catch (error) {
            console.log(error);
        }


    }

    return (
        <div className={styles.mainWrap}>
            <h6 className='text-center'>WELCOME TO GALLERY COMPONENTS </h6>
            <div className='row mt-4'>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-header text-center'>Product Details</div>
                        <div className='card-body text-center'>
                            <p>product ID:</p>
                            <p>Code:</p>
                            <p>Duration: </p>
                            <p>Mode: </p>
                        </div>
                        <div className='card-footer text-center'><button className='btn btn-primary'>View Details</button></div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Gallery;