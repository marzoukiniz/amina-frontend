import Head from 'next/head'
import Link from "next/link"
import NextImage from "../../../components/Image";
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FandBList from '../../../components/FandBList'; 
import { fetcher } from '../../../utils/api';
import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import qs from 'qs';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Thumbs, Pagination } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
 

const foodAndBeverage = ({ foodAndBs}) => {
  const router = useRouter()
  const {locale} = useRouter();
  const { t: translate } = useTranslation(['common','loyalty']);

  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  // const { data } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/services?populate=*`,
  //   fetcher,
  //   {
  //     fallbackData: services,
  //   }
  // );
  return (
    <>
      <Navbar />
      <div className='row services-page'>
      <div className='col-md-12 col-lg-12 banner'>

      <NextImage
          src="/images/fandb.png"
          alt="home"
          className="banner-img"
          height="476"
          width="1008"
        />
        <p className='page-title'>
        PRINTEMPs GOURMET
        </p>
      </div>
     
     
      </div>
      <div className=' services-section '>
       
        <h2 className="services-desc">
        <NextImage
                      src="/images/Pflower.svg"
                      alt="home"
                      className=""
                      height="50"
                      width="50"
                    />
                    {translate('fbDesc')}
                    </h2>
         <div className='mb-3 mt-3 primary-services'>
          <div className='container'>
            <div className='row'>
              <FandBList foodAndBs={foodAndBs} />
            </div>
           
          </div>
        </div>
        
        
      </div>

      <Footer />
    </>
  );
};

 


export default foodAndBeverage;

export async function getStaticProps({locale}) {

  const fandbRes = await fetcher(
     
    `${process.env.NEXT_PUBLIC_API_URL}/api/food-beverages?locale=${locale}&populate=*`
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','loyalty'])),
     
      foodAndBs: fandbRes,
    },
  };
}