import Head from 'next/head'
import Link from "next/link"
 
import Main from '../../../components/Navbar';
import Footer from '../../../components/Footer'; 
import Navbar from '../../../components/Navbar';
import NextImage from "../../../components/Image"; 
import { getTiers } from "../../../utils/api";
import { useEffect, useContext,useState } from 'react';
import { UserContext } from '../../../../context/user';
import Sidebar from '@/components/dashboard/Sidebar';
import TopCards from '@/components/dashboard/TopCard';
 import LanguageSwitcher from '@/components/LanguageSwitcher';
  import RightMenu from '@/components/RightMenu';
import {RxSketchLogo, RxDashboard,RxPerson} from "react-icons/rx";
import {FiSettings} from 'react-icons/fi';
import {TbProgress} from 'react-icons/tb';
import {BsBalloonHeart} from 'react-icons/bs'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
  const Home = () => {
    const { user, checkLogin,id } = useContext(UserContext);
    const { t: translate } = useTranslation(['loyalty','common']);
 
  return (
  <Sidebar>
 
      <div className='row'>
        <div className='col-12   '>
          <div className='breadc'>
          <nav aria-label="breadcrumb" class="breadcrumbs medium-font">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link href='/' >{translate('home')}</Link> </li>
              <li class="breadcrumb-item active" aria-current="page"> {translate('dashboard')}</li>
            </ol>
          </nav>
         <RightMenu/>
         </div>
        </div>
      </div>
     <div className='row  '>
        <div className='col-lg-12 col-md-12 col-xs-12 col-sm-12 '>
        <div className='d-flex  profile-progress '>
             <span className='progress-right'>
                <BsBalloonHeart size={30} className='icon-pg'/> 
                <span className='titles'>
                <p className='title'>{translate('conSetupTitle')}</p> <p className='desc'>{translate('conSetupDesc')}</p> 
                </span>
             
             </span>
             
             <button className='btn btn-primary btn-setup'>{translate('conSetup')}</button>         
            </div>
        </div>
     </div>
     <TopCards/> 
   
    </Sidebar>
  )
}


export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','loyalty'])),
    },
  };
}

export default Home