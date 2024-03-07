import React, { useEffect, useContext } from 'react';
import useRouter from 'next/router';
 
import { UserContext } from '../../../context/user';
import ForgotForm from '../../components/ForgotForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const forgotpassword = () => {
  const { user, checkLogin } = useContext(UserContext);
  useEffect(async () => {
    const res = await checkLogin();
    if (res.status === 200) {
    }
  }, []);
  if (user) {
    useRouter.push('/user');
  }

  return (<div><Navbar/><div className='container'>
    <div className='row mb-4 mt-4'>
      <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 forgotpwd'>
      <ForgotForm />
      </div>
    </div>
    </div> <Footer/>
    
    </div>);
};

export default forgotpassword;
