import Head from 'next/head'


import Main from '../components/Navbar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SingUp from '@/components/SingUp';
import NextImage from "../components/Image";
import TiersList from "../components/TiersList"
import { getTiers } from "../utils/api"
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useContext } from 'react';
import RegisterForm from '../components/RegisterForm';
import { UserContext } from '../../context/user';
import LoginForm from '@/components/LoginForm';

const Home = () => {
  const router = useRouter()
  const { t: translate } = useTranslation('common');
  const { locale, locales, push } = router;

  return (

    <div>
     
      <Head>
        <title>Printanium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>

      <Navbar />
      <div className=' '>

        <NextImage
          src="/banner.png"
          alt="home"
          className=""
          height="615"
          width="1516"
        />

      </div>
      <div className='container'>
    
        {/* <TiersList tiers={tiers} /> */}
      </div>
      <Footer />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-body">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="true">
                    {translate('login')}
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="portfolio-tab" data-bs-toggle="tab" data-bs-target="#portfolio" type="button" role="tab" aria-controls="portfolio" aria-selected="false">
                    {translate('signup')}
                      </button>
                  </li>

                </ul>
                
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                   <LoginForm/> 
                  </div>
                  <div className="tab-pane fade" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                    <RegisterForm/> 
                  </div>

                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export async function getStaticProps({ locale }) {
  // const tiers = await getTiers()
  return {
    props: {
      // tiers,
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}

export default Home