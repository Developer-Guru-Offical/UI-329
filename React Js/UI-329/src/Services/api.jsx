import axios from 'axios';

// Using Axios Method
export const getUSerDetails=async()=>{
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

// Using Fetch Method
// export const getUSerDetails=async()=>{
//    return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => { 
//             return response.json().then((data) => {
//                 const status = response.status;
//                 return {status,data};
//             }).catch((err) => {
//                 console.log(err);
//             }) 
//         });

// }

