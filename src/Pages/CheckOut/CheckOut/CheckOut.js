import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';


const CheckOut = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    if(user){
        console.log();
    }

    // const [user, setUser] = useState({

    // })

    const handlePlaceOrder = e =>{
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone:e.target.phone.value
        }
       axios.post('http://localhost:5000/order', order)
       .then(res => {
           const {data} = res;
           if(data.insertedId){
               toast('Your order is booked');
               e.target.reset();
           }
       })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name} </h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' disabled value={user?.displayName} type="text" name="name" readOnly placeholder='name' required />
                <br />
                <input className='w-100 mb-2' disabled value={user?.email} type="email" name="email" readOnly placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service?.name} readOnly name="service" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' type="text" autoComplete='off' name="address" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;