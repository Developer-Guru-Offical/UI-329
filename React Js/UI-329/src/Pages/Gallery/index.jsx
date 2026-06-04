
import { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import { getUSerDetails } from '../../Services/api';
import { useNavigate } from "react-router-dom";

const Gallery = () => {

    const [userData, setUserData] = useState([]);
     const navigate = useNavigate();
    console.log('userData@@@@@@', userData);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        try {
            const response = await getUSerDetails();
            if (response.status === 200) {
                //console.log(response.data);
                setUserData(response.data);

            }
        }
        catch (error) {
            console.log(error);
        }
    }
  const redirect=(id)=>{
        //console.log(id,'item.id@@####');
        localStorage.setItem('u_id',JSON.stringify(id));
        navigate("/galleryDetails")
     
    }

    return (
        <div className={styles.mainWrap}>
            <h6 className='text-center'>WELCOME TO GALLERY COMPONENTS </h6>
            <div className='row mt-4' >
                {userData.slice(0,4).map((item, index) => {
                    return <div className='col-md-3' key={index}>
                        <div className='card'>
                            <div className='card-header text-center'>{item.name}</div>
                            <div className='card-body text-center'>
                                <p>product ID:{item.id}</p>
                                <p>UserName:{item.username}</p>
                                <p>Email: {item.email}</p>
                                <p>phone: {item.phone}</p>
                                <p>Website: {item.website}</p>
                            </div>
                            <div className='card-footer text-center'><button className='btn btn-primary' onClick={()=>redirect(item.id)}>View Details</button></div>
                        </div>
                    </div>
                })}
            </div>

        </div>

    )

}

export default Gallery;