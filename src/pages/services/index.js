import Head from 'next/head'
import Link from "next/link"
import NextImage from "../../components/Image";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServicesList from '../../components/ServicesList';
import ServicesListSecond from '../../components/ServicesListSecond'
import { fetcher } from '../../utils/api';
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
 

const services = ({ primaryServices ,secondaryServices}) => {
  const router = useRouter()
  const {locale} = useRouter();
  const { t: translate } = useTranslation(['loyalty','common']);

  
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
          src="/images/services2.png"
          alt="home"
          className="banner-img"
          height="476"
          width="1008"
        />
        <p className='page-title'>
          Our services
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
           Welcoming, entertaining and a social landmark, Printemps Doha aims to offer an unfailing ultra-personalized service for each and everyone.
Services include: </h2>
        <div className='mb-3 mt-3 primary-services'>
          <div className='container'>
            <div className='row'>
              <ServicesList services={primaryServices} />
            </div>
            <div className='row'>
              <ServicesListSecond services={secondaryServices} />
            </div>
          </div>
        </div>
        
        
      </div>

      <Footer />
    </>
  );
};

 


export default services;

export async function getStaticProps({locale}) {
  const query = qs.stringify(
    {
      filters: {
        
          type: {
            $eq: 'primary',
          
        },
      },
      populate: ['image'],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const query2 = qs.stringify(
    {
      filters: {
        
          type: {
            $eq: 'secondary',
          
        },
      },
      populate: ['image'],
    },
    {
      encodeValuesOnly: true,
    }
  );


  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_PROD_URL : process.env.NEXT_PUBLIC_API_BASE_URL;


 

  const servResponse = await fetcher(
    `${baseUrl}/services?${query}`
  );
  const servRes = await fetcher(
    `${baseUrl}/services?${query2}`
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','loyalty'])),
      primaryServices: servResponse,
      secondaryServices: servRes,
    },
  };
}