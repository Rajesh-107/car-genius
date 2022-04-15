import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
        return <Loading></Loading>
     }

      if(user){
          navigate(from, {replace:true});
      }
      if (error) {
        errorElement = 
            <p className="text-danger">Error: {error?.message}</p>
          
      }
      const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
          await sendPasswordResetEmail(email);
          toast('sent Email');
        }
        else{
          toast('please enter your email address');
        }
      }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = e => {
        navigate('/register');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-info'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
  </Form.Group>
 
  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
    Login
  </Button>
</Form>
{errorElement}
<p>New to Genius Car? <Link to='/register' className='text-decoration-none text-primary pe-auto' onClick={navigateRegister}>Please Register</Link></p>
<p>Forget Password? <button  className='btn btn-link text-decoration-none text-primary pe-auto' onClick={resetPassword}>Reset Password</button></p>
<SocialLogin></SocialLogin>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;