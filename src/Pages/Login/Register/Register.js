import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    const handleRegister = e => {
        e.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='your name' id="" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Enter email' id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" placeholder='Type password' id="" />
               
                <input type="submit" value="Register" />
            </form>
            <p>Already have an Account <Link to='/login' className='text-decoration-none text-danger pe-auto' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;