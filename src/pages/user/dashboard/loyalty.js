import Head from 'next/head'
import Link from "next/link"

import Main from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import NextImage from "../../../components/Image";
import { getTiers } from "../../../utils/api";
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../../context/user';
import Sidebar from '@/components/dashboard/Sidebar';
import TopCards from '@/components/dashboard/TopCard';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import RightMenu from '@/components/RightMenu';
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from 'react-icons/fi';
import { TbProgress } from 'react-icons/tb';
import { BsBalloonHeart } from 'react-icons/bs'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  const { user, checkLogin, id } = useContext(UserContext);
  const { t: translate } = useTranslation(['loyalty', 'common']);

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
            <RightMenu />
          </div>
        </div>
      </div>

      <div className='row  '>
        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12  box-no    justify-between w-full '>

          <div className='mycard bg-white box-yes   p-3'>
            <p>Status</p>
            <div className='myloyalty'>
              <div className='icon'>
                <NextImage
                  src="/images/status1heart.svg"
                  alt="home"
                  className=""
                  height="153"
                  width="165"
                />
              </div>
              <div className='info-text'>
                <div className='title'>Congratulation !
                  You are a 1 Heart member</div>
                <div className='progress-status'>
                  <div className='current-lv'>1 heart</div>
                  <div className='status'>
                    <div className='pg-bar'></div>
                  </div>
                  <div className='next-lv'>2 heart</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className=' col-lg-3 col-md-3 col-sm-12 col-xs-12    justify-between w-full   '>
          <div className='mycard bg-white box-yes locked  p-3'>
            <p>2 Hearts</p>
            <div className='myloyalty'>
              <div className='icon'>
                <NextImage
                  src="/images/status2heart.svg"
                  alt="home"
                  className=""
                  height="153"
                  width="165"
                />
              </div>
              <div className='info-text'>
                <br/>
                <div className='title'>Spend QAR 50000</div>
                 
              </div>
            </div>
          </div>


        </div>

        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12  box-no   justify-between w-full '>
          <div className='mycard bg-white box-yes locked   p-3'>
            <p>3 Hearts</p>
            <div className='myloyalty'>
              <div className='icon'>
                <NextImage
                  src="/images/status3heart.svg"
                  alt="home"
                  className=""
                  height="153"
                  width="165"
                />
              </div>
              <div className='info-text'>
              <br/>
                <div className='title'>Spend QAR 50000</div>
                 
              </div>
            </div>
          </div>


        </div>
        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12    box-no    justify-between w-full '>
          <div className='mycard bg-white box-yes locked  p-3'>
            <p>4 hearts</p>
            <div className='myloyalty'>
              <div className='icon'>
                <NextImage
                  src="/images/status4heart.svg"
                  alt="home"
                  className=""
                  height="153"
                  width="165"
                />
              </div>
              <div className='info-text'>
              <br/>
                <div className='title'>Spend QAR 50000</div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row  '>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  box-yes   bg-white   justify-between w-full '>
          </div>
          </div>
    </Sidebar>
  )
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'loyalty'])),
    },
  };
}

export default Home