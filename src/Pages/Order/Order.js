import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect( ()=> {
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
           try{
            const {data} = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
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
        <div>
            <h2>All orders list: {orders.length} </h2>
        </div>
    );
};

export default Order;