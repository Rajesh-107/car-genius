import React, {useState, useEffect} from 'react';

import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect( ()=> {
        const getOrders = async() =>{
            const email = user?.email;
            const url = `https://peaceful-tor-59342.herokuapp.com/order?email=${email}`;
           try{
            const {data} = await axiosPrivate.get(url);
            setOrders(data);
           }
           catch(error){
            console.log(error.message);
            if(error.res.status === 401 || error.res.status === 403){
               signOut(auth);
                navigate('/login')
            }
           }
        }
        getOrders();
       
    } , [])
    return (
        <div className='w-50 mx-auto'>
            <h2>All orders list: {orders.length} </h2>
            {
                orders.map(order => <div key={order._id}>
                    <p> {order.email} : {order.service} </p>
                </div>)
            }
        </div>
    );
};

export default Order;