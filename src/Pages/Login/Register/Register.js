import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';



const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
      const [token] = useToken(user);
    const navigateLogin = () =>{
        navigate('/login');
    }

    if(loading || updating){
        return <Loading></Loading>
     }

    if(token){
        console.log('user', user);
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //const agree = event.target.termsd;

        
         await createUserWithEmailAndPassword(email, password);
         await updateProfile({displayName: name});
         console.log('Update profile');
        //  navigate('/home');

    
        
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
                <input type="password" name="password" placeholder='Type password' id="" />
               <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
               <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <input 
                disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to='/login' className='text-decoration-none text-primary pe-auto' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;