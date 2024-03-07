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
import {AiFillPhone} from 'react-icons/ai';
 import {MdEmail} from "react-icons/md";
 import {TiLocationArrow} from 'react-icons/ti'
 import EditUserForm from '@/components/dashboard/EditUserForm';
 import AccountSettings from '@/components/dashboard/AccountSettings';
 import { useTranslation } from 'next-i18next';
 import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

  const profile = ({tiers}) => {
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
     
     <div className='row  '>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  justify-between w-full   rounded-lg'>
           <div className='profile-top-card '>
           <div className='profile-img'>
              <NextImage
          src="/user.png"
          alt="home"
          className=""
          height="180"
          width="180"
        />
      
           </div>
           <div className='profile-details'>
           <div className='item'>
           
              <div className='title name'>Nizar Marzouki</div>
              
            </div>
            <div className='item'>
              <div className='icon'><AiFillPhone /></div>
              <div className='title'>{translate('mobileNo')}:</div>
              <div className='value'>5538 9838</div>
            </div>
            <div className='item'>
              <div className='icon'><MdEmail /></div>
              <div className='title'> {translate('email')}:</div>
              <div className='value'>eng.nizar@gmail.com</div>
            </div>
            <div className='item'>
              <div className='icon'><TiLocationArrow /></div>
              <div className='title'>{translate('country')}:</div>
              <div className='value'>Qatar</div>
            </div>
           </div>
           </div>
        </div>

        <div className='col-12 profile-nav    '>
        <ul class="nav nav-tabs bg-white " id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab" aria-controls="orders" aria-selected="true">
                    {translate('about')}
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="editprofile-tab" data-bs-toggle="tab" data-bs-target="#editprofile" type="button" role="tab" aria-controls="portfolio" aria-selected="false">
                        {translate('editProfile')}
                      </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="accountsettings-tab" data-bs-toggle="tab" data-bs-target="#accountsettings" type="button" role="tab" aria-controls="portfolio" aria-selected="false">
                   {translate('accountStettings')}
                      </button>
                  </li>
                </ul>
                
                

        </div>
        
        </div>
        <div class="row tab-content " id="myTabContent">
                  <div class="tab-pane fade show active p-4" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <section  >
                  
                    </section>
                  </div>
                  <div class="tab-pane fade  p-4" id="editprofile" role="tabpanel" aria-labelledby="editprofile-tab">
                    <section class=" ">
                    <EditUserForm/>
                    </section>
                  </div>
                  <div class="tab-pane fade  p-4" id="accountsettings" role="tabpanel" aria-labelledby="accountsettings-tab">
                    <section class=" ">
                    <AccountSettings/>
                    </section>
                  </div>
        </div>
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
export default profile