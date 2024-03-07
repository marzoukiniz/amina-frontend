import Head from 'next/head' 
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NextImage from "../components/Image";
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useEffect, useContext ,useState} from 'react';
import { motion, useScroll } from "framer-motion"
 
const Home = () => {
 
  const router = useRouter()
  const { t: translate } = useTranslation('common');
  const { locale, locales, push } = router;
  const { scrollYProgress } = useScroll();
 
  return (
   
    <div>
        <motion.div
        className="progress-barHome"
        style={{ scaleX: scrollYProgress }}
      />

      <Head>
        <title>Amina</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/rtl.css" hrefLang='ar'/>
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
   
    </div>

  )
}


export async function getStaticProps({ locale }) {
  // const tiers = await getTiers()
  return {
    props: { 
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}

export default Home