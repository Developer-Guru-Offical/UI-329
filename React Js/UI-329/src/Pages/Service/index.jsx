
import { useEffect, useState } from 'react'
import './Service.css'

const Service = () => {
    const [serviceDetails, setServiceDetails] = useState();
    console.log(serviceDetails, 'serviceDetails@@###')
    useEffect(() => {
        getServiceProductDetails();
    }, []);

    const getServiceProductDetails = () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setServiceDetails(json)
            )

    }

    const redirect=(id)=>{
        console.log(id,'item.id@@####');
        localStorage.setItem('id',JSON.stringify(id));
        
    }

    return (
        <div className="serviceMainWrap">
            <h3> This are the services </h3>
            <div className='row mt-4'>
                {serviceDetails.slice(0,4).map((item, index) => {
                    return <div className='col-md-3'>
                        <div className='card' key={index}>
                            <div className='card-header text-center'>Title:{item.title}</div>
                            <div className='card-body text-center'>
                                <p>User ID:{item.userId}</p>
                                <p>Id:{item.id} </p>
                                <p>Description:{item.body}</p>
                            </div>
                            <div className='card-footer text-center'><button className='btn btn-primary' onClick={()=>{redirect(item.id)}}>View Details</button></div>
                        </div>
                    </div>
                })}
            </div>


        </div>
    )


}

export default Service;