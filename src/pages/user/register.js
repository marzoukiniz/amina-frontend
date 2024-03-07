import React, { useEffect, useContext } from 'react';

import { UserContext } from '../../../context/user';
 import RegisterForm from '../../components/RegisterForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { motion } from "framer-motion";
import NextImage from "../../components/Image";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useRouter from 'next/router';

function Register() {
  const { user, checkLogin } = useContext(UserContext);
  const { t: translate } = useTranslation(['loyalty','common']);


useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await checkLogin();
      if (res.status === 200) {
      }
       
    }
    fetchData();
  }, []);
  if (user) {
    router.push('/user/dashboard');
  }
 
 

  return (<div><Navbar/><div className='container register-page'>
  <div className='row mb-4 mt-4'>
    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-1  '>
    <RegisterForm /> 
  
    </div>
   
  </div>
  </div> 
  
  
  
  <Footer/>
  
  </div>);
  

}

export default Register;
export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','loyalty'])),
    },
  };
}