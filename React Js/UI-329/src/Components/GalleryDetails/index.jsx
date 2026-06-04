
import { useEffect, useState } from 'react';
import styles from './GalleryDetails.module.scss';
import { getUserDetails } from '../../Services/api';

const GalleryDetails = () => {
    const[userData,setUserData]=useState([]);

    console.log(userData,'userData@@###');

    useEffect(()=>{
            const userId = JSON.parse(localStorage.getItem('u_id'));
            console.log('getlocalstorageUserId##$$$$',userId);
        if (userId) {
            getUsersDetails(userId);
        }
    },[])


     const getUsersDetails = async (userId) => {
            try {
                const response = await getUserDetails(userId);
                if (response.status === 200) {
                    console.log(response.data);
                    setUserData([response.data]);
    
                }
            }
            catch (error) {
                console.log(error);
            }
        }

    return <div> 
        {userData && userData?.map((item,index)=>{
           return <div className='row mt-4 p-5' key={index}>
            <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-header text-center'>{item.name}</div>
                        <div className='card-body text-center'>
                            <p>product ID:{item.id}</p>
                            <p>UserName:{item.username}</p>
                            <p>Email: {item.email}</p>
                            <p>phone:{item.phone}</p>
                            <p>Website:{item.website}</p>
                             <p>city:{item.address.city}</p>
                              <p>Company:{item.company.name}</p>
                            
                        </div>
                        <div className='card-footer text-center'></div>
                    </div>
                </div>
            </div>
        })}
    </div>

}

export default GalleryDetails;