import Head from 'next/head'
import Link from "next/link"
import NextImage from "../../components/Image";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Tiers from '../../components/Tiers';
import { fetcher } from '../../utils/api';
import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Navigation, Thumbs, Pagination } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
 
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_PROD_URL : process.env.NEXT_PUBLIC_API_BASE_URL;

const TiersList = ({ tiers }) => {
  const router = useRouter()
  const {locale} = useRouter();
  const { t: translate } = useTranslation(['loyalty','common']);

  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `${baseUrl}/tiers?populate=*`,
    fetcher,
    {
      fallbackData: tiers,
    }
  );
  return (
    <>
      <Navbar />
      <div className=' '>
       <Swiper
         
       
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      spaceBetween={3}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><NextImage
          src="/heroImg.png"
          alt="home"
          className=""
          height="615"
          width="1516"
        />
        </SwiperSlide>
     
      <SwiperSlide><NextImage
          src="/images/pt-home.png"
          alt="home"
          className=""
          height="615"
          width="1516"
        /></SwiperSlide>
   
    
    </Swiper>
          
    

      </div>
      <div className='  loyalty-page'>
        <div className='row loyalty'>
          <div className='col-12 d-flex btns-row '>
            <Link href="/user/register"  >   <button className='register-btn '>{translate('signNow')}</button> </Link>
            <Link href="/user/login">   <button className='register-btn '>{translate('login')}</button></Link>
          </div>
        </div>
        <h2 className="section_title"> {translate('tiers')} </h2>
        <div className='mb-3 mt-3 tiers_display'>
          <div className='container'>
            <div className='row'>
              <Tiers tiers={data} />
            </div>
          </div>
        </div>
        <div className='container'>
          <h2 className="section_title"> {translate('benefits')} </h2>
          <div className='benefits d-flex'>
            <div className='benefits_head'>
              <div className='benefits_title'>Saving</div>
              <div className='benefits_item'>Double Points On Selected Days</div>
              <div className='benefits_item'>Points Redemption Any Time</div>
              <div className='benefits_item'>Birthday Celebration</div>
              <div className='benefits_item'>F&B</div>
              <div className='benefits_item'>Exclusive Discount Days</div>
              <div className='benefits_item'>Special Member Day Saving</div>
              <div className='benefits_item'>Free Invitation For Chocolate/ Pierre Marcolini </div>
              <div className='benefits_item'>1 Private Dinner (2 Persons)*</div>
              <div className='benefits_item'>Private Make Up Service**</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title one'>
                Topaz
                <svg width="27.127" height="27.127" viewBox="0 0 27.127 27.127">
                  <g id="Group_738" data-name="Group 738" transform="translate(13.563) rotate(45)">
                    <g id="Group_632" data-name="Group 632" transform="translate(0 0)">
                      <path id="Path_4187" data-name="Path 4187" d="M17,6.2c-.049-.065-.081-.105-.086-.111a17.087,17.087,0,0,0-2.023-1.758.239.239,0,0,0-.028-.021A20.354,20.354,0,0,0,9.807,1.623a.32.32,0,0,0-.163-.061A26.433,26.433,0,0,0,4.568.3.282.282,0,0,0,4.5.275a.275.275,0,0,0-.057,0A24.278,24.278,0,0,0,.309.007L.3.009a.219.219,0,0,0-.042.01.233.233,0,0,0-.032,0C.223.024.22.028.213.031L.188.039A.347.347,0,0,0,.149.067.319.319,0,0,0,.11.094L.093.11A.347.347,0,0,0,.066.149.284.284,0,0,0,.04.188.2.2,0,0,0,.031.214C.029.219.024.223.023.229a.136.136,0,0,0,0,.031A.213.213,0,0,0,.009.3l0,.005A24.079,24.079,0,0,0,.28,4.434a.28.28,0,0,0,0,.062A.29.29,0,0,0,.3,4.573a26.514,26.514,0,0,0,1.26,5.056V9.64a.317.317,0,0,0,.072.181,20.3,20.3,0,0,0,2.678,5.024.3.3,0,0,0,.061.086,17.287,17.287,0,0,0,1.742,2s.037.03.092.072a.314.314,0,0,0,.219.16,12.191,12.191,0,0,0,2.342,1.3.184.184,0,0,0,.026.023.3.3,0,0,0,.122.039,9.094,9.094,0,0,0,2.739.648.315.315,0,0,0,.163.01,6.527,6.527,0,0,0,2.612-.406c.012,0,.024,0,.035-.006a.258.258,0,0,0,.029-.018,7.085,7.085,0,0,0,2.446-1.632l.082-.083.09-.089h0a7.071,7.071,0,0,0,1.631-2.446.272.272,0,0,0,.018-.027.192.192,0,0,0,.005-.035,6.526,6.526,0,0,0,.406-2.611.316.316,0,0,0-.011-.166,9.051,9.051,0,0,0-.647-2.734.341.341,0,0,0-.038-.127c-.007-.011-.017-.018-.026-.029A12.167,12.167,0,0,0,17.161,6.43.313.313,0,0,0,17,6.2m.792,2.611-.518.294-.054-1.423a11.385,11.385,0,0,1,.572,1.129m.471,5.115-.751-.287,1.011-1.055a5.871,5.871,0,0,1-.26,1.342m-5.7,4.613,1.082-1.037.292.765a5.819,5.819,0,0,1-1.374.272m-4.907-1.33,1.456.054-.307.54a11.038,11.038,0,0,1-1.149-.595m-.6-15.778L4.7,1.321,4.739.969c.722.113,1.5.264,2.315.467M3.682,4.358,3.8,7.534,2.133,4.588Zm10.9,10.219-3.025,1.41L8.74,14.621,4.49,8.726,4.322,4.32l4.406.169L14.621,8.74l1.366,2.813Zm-5.3,1.014,1.427.693-.9.3Zm6.315-6.316.989.53-.3.9Zm-1.51-1.712L10.527,5l2.748.8ZM8.957,3.876,5.665,2.009,9.5,2.2l2.824,2.663ZM4.588,2.132,7.534,3.8,4.358,3.681ZM3.706,3.706l-1.86.276L.824.824,3.982,1.845ZM7.563,14.08l-1.758-.8L5,10.527ZM8.3,15.119l.809,1.509-2.378-.09-.7-2.456Zm3.267,1.558,1.572.426-1.382,1.325L10.277,17.1Zm2.033-.112-1.115-.3,1.642-.765Zm1.462-1.505L16.6,14.3l-.1,2.192L14.3,16.6Zm.437-.933.765-1.642.3,1.115Zm1.178-2.561.426-1.288,1.326,1.478L17.1,13.138Zm-.047-2.458L15.119,8.3,14.082,6.034l2.457.7Zm-5.513-6.26A18.886,18.886,0,0,1,14.18,4.6l-.659.513ZM4.066,1.2,2.556.713C3.017.748,3.539.8,4.1.876ZM1.2,4.066.877,4.1C.8,3.539.749,3.018.713,2.558ZM3.876,8.956l.983,3.363L2.2,9.5,2.01,5.665Zm1.241,4.565-.511.655a19.025,19.025,0,0,1-1.751-3.052ZM5,14.713l.4-.512.424,1.5c-.29-.323-.565-.653-.824-.99m4.732,2.759,1.087.975a8.516,8.516,0,0,1-1.417-.393Zm4.49-.231,1.7-.08a6.374,6.374,0,0,1-1.393.876Zm3.015-3.015.788.3a6.272,6.272,0,0,1-.868,1.394Zm.231-4.49.557-.317a8.933,8.933,0,0,1,.378,1.357ZM14.2,5.4l.517-.4q.506.391.992.828ZM.97,4.738,1.322,4.7,1.436,7.04c-.2-.811-.353-1.585-.466-2.3" transform="translate(0 0)" fill="#f8fafb" />
                    </g>
                  </g>
                </svg>
                0 To 49,999 QAR
              </div>
              <div className='benefits_item'> 2 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'> 1 Coffee + 1 Pastry</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title two'>
              Emerald
                      <svg width="19.312" height="19.313" viewBox="0 0 19.312 19.313">
                        <defs>
                          <clipPath id="clipPath">
                            <rect id="Rectangle_822" data-name="Rectangle 822" width="19.312" height="19.313" fill="#f8fafb" />
                          </clipPath>
                        </defs>
                        <g id="Group_633" data-name="Group 633" clipPath="url(#clipPath)">
                          <path id="Path_4188" data-name="Path 4188" d="M11.085.125A.214.214,0,0,0,11.055.1.2.2,0,0,0,11.01.088.123.123,0,0,0,10.988.08s-.008,0-.012,0-.01,0-.016,0L7.951,0a.224.224,0,0,0-.027.005c-.009,0-.017,0-.026,0a.067.067,0,0,0-.014.007.185.185,0,0,0-.04.017.221.221,0,0,0-.036.024s-.01,0-.014.009L.062,7.794a.112.112,0,0,0-.009.014.177.177,0,0,0-.024.037.186.186,0,0,0-.017.038A.073.073,0,0,0,.005,7.9a.227.227,0,0,0,0,.028c0,.009,0,.017,0,.026l.077,3.01s0,.009,0,.014,0,.009,0,.014.007.016.009.024a.229.229,0,0,0,.015.042.265.265,0,0,0,.023.033.231.231,0,0,0,.014.021L8.28,19.249a.218.218,0,0,0,.164.063l2.717-.134a.214.214,0,0,0,.236.111.212.212,0,0,0,.1-.057.208.208,0,0,0,.051-.084.218.218,0,0,0,.082-.048L19.1,11.635a.21.21,0,0,0,.048-.082.207.207,0,0,0,.084-.051.212.212,0,0,0-.054-.34l.134-2.717a.216.216,0,0,0-.063-.165L11.109.141a.214.214,0,0,0-.024-.016M.749,11.109l1.159-.17,3.223,3.223,3.224,3.224-.17,1.159ZM.439,8.221l1.272.3.051,2L.5,10.708ZM10.707.5l-.184,1.26-2-.051L8.221.439Zm3.15,4.934,3,3-.981.144L13.3,6,10.717,3.422l.144-.982Zm.148,8.569-2.938,2.938-.184-.783,2.638-2.638,2.638-2.638.783.183Zm-8.569-.148-3-3,.981-.144L6,13.3l2.578,2.578-.143.981ZM5.289,5.289,8.226,2.352l.184.783L5.772,5.773,3.134,8.411l-.783-.184Zm7.7,1.014,2.351,2.352-.6.088-2.1-2.1-2.1-2.1.088-.6Zm.224,6.912-2.448,2.448-.2-.836L12.7,12.7l2.128-2.128.836.2ZM6.3,12.991,3.952,10.64l.6-.087,2.1,2.1,2.1,2.1-.088.6ZM6.079,6.079,8.527,3.632l.2.836L6.6,6.6,4.467,8.724l-.836-.2Zm8.457,4.169-2.144,2.145-2.144,2.144L9.066,14.46,6.95,12.344,4.835,10.229,4.759,9.047,6.9,6.9,9.046,4.759l1.182.076L12.344,6.95,14.46,9.066ZM10.137,4.4l-1-.065-.2-.864,1.311.208ZM4.332,9.135l.065,1-.721.106-.208-1.31ZM9.157,14.9l1,.065.2.865-1.31-.209Zm5.805-4.738-.065-1,.721-.106.208,1.312ZM10.305,3.249l-1.48-.235-.2-.867,1.838.047ZM3.013,8.826l.235,1.48-1.056.155L2.146,8.622Zm5.977,7.222,1.48.235.2.867L8.834,17.1Zm7.292-5.578-.235-1.48L17.1,8.835l.047,1.838ZM8.11,1.854,4.982,4.982,1.854,8.11.644,7.826,7.826.644Zm.662,15.678,2,.051.274,1.167-2.473.122Zm2.413-.091,3.128-3.128,3.128-3.128,1.21.284-7.182,7.182Zm6.4-6.666-.051-2,1.34-.2-.122,2.473Zm-.2-2.419L14.162,5.132,10.939,1.909l.17-1.16,7.437,7.437Z" transform="translate(0 0)" fill="#f8fafb" />
                        </g>
                      </svg>

                      50,000 To 99,999 QAR 
              </div>
              <div className='benefits_item'>3 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'> 2 Coffees + 2 Pastries</div>
              <div className='benefits_item'>10%</div>
              <div className='benefits_item'>10% 1 Day</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title three'>
              Ruby
                      <svg width="27.155" height="27.155" viewBox="0 0 27.155 27.155">
                        <defs>
                          <clipPath id="clipPath">
                            <rect id="Rectangle_883" data-name="Rectangle 883" width="19.18" height="19.223" fill="#f8fafb" />
                          </clipPath>
                        </defs>
                        <g id="Group_739" data-name="Group 739" transform="translate(13.593) rotate(45)" clipPath="url(#clipPath)">
                          <path id="Path_4260" data-name="Path 4260" d="M19.18,19.223l-5.249-.014c-1.092,0-2.184.012-3.275-.016A1.06,1.06,0,0,1,10,18.92Q5.148,14.1.325,9.252a.861.861,0,0,1-.259-.52C.033,5.87.019,3.007,0,0,1.123.027,2.145.066,3.169.072c1.8.01,3.609-.011,5.414.008a1.037,1.037,0,0,1,.653.27q4.846,4.826,9.664,9.679a.8.8,0,0,1,.248.475c.022,2.879.026,5.758.033,8.719M15.3,15.35c-.013-1.115-.011-2.126-.048-3.135A1,1,0,0,0,15,11.6Q11.341,7.9,7.654,4.238c-.107-.107-.254-.244-.386-.247-1.087-.028-2.176-.028-3.327-.037.007,1.132,0,2.191.03,3.248a.752.752,0,0,0,.232.44q3.7,3.719,7.42,7.42a.753.753,0,0,0,.435.242c1.041.031,2.083.033,3.242.046m-5,2.687c.3-.716.6-1.375.851-2.049.038-.1-.068-.3-.164-.4Q7.35,11.941,3.7,8.307c-.1-.1-.292-.22-.388-.185-.69.252-1.364.542-2.091.839L10.3,18.037M8.944,1.254c-.294.713-.575,1.362-.82,2.024a.486.486,0,0,0,.135.4q3.646,3.666,7.313,7.313c.085.085.264.176.356.143.677-.246,1.343-.522,2.08-.815L8.944,1.254m9.3,9.86c-.571.227-1.159.478-1.761.69a.5.5,0,0,0-.4.579,7.758,7.758,0,0,1-.008,1.514,2.73,2.73,0,0,0,1.163,2.815,9.754,9.754,0,0,1,1.027,1.011c-.006-2.259-.01-4.409-.016-6.608M1,1.6C1,3.812,1,5.972.994,8.165c.629-.259,1.287-.514,1.927-.809a.53.53,0,0,0,.211-.409c.018-.963.015-1.925,0-2.889a.685.685,0,0,0-.12-.432C2.361,2.945,1.686,2.282,1,1.6m.645-.579a.149.149,0,0,0,.029.083c.634.642,1.265,1.286,1.912,1.915a.6.6,0,0,0,.383.13q1.5.017,2.99,0c.121,0,.314-.062.353-.149.3-.67.57-1.353.817-1.952L1.648,1.02m15.958,17.22c-.667-.667-1.349-1.355-2.044-2.032a.492.492,0,0,0-.312-.069c-.979-.006-1.958-.009-2.936,0-.125,0-.322.056-.362.143-.307.665-.584,1.344-.851,1.974l6.505-.018" transform="translate(0 0)" fill="#f8fafb" />
                        </g>
                      </svg>

                      100,000 To 199,999 QAR 
              </div>
              <div className='benefits_item'>4 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'>Meal & Drink For 2</div>
              <div className='benefits_item'>15%</div>
              <div className='benefits_item'>15% 2 Days</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title four'>
              Diamond
                      <svg width="27.124" height="27.124" viewBox="0 0 27.124 27.124">
                        <defs>
                          <clipPath id="clipPath">
                            <rect id="Rectangle_884" data-name="Rectangle 884" width="19.18" height="19.179" fill="#f8fafb" />
                          </clipPath>
                        </defs>
                        <g id="Group_740" data-name="Group 740" transform="translate(13.562) rotate(45)" clipPath="url(#clipPath)">
                          <path id="Path_4261" data-name="Path 4261" d="M19.159.193V.187a.286.286,0,0,0-.066-.1l-.005,0,0,0a.152.152,0,0,0-.028-.017.293.293,0,0,0-.075-.044.236.236,0,0,0-.043-.009A.3.3,0,0,0,18.856,0a.159.159,0,0,1-.019,0L11.649.953a.292.292,0,0,0-.079.023l-.013,0a.306.306,0,0,0-.079.057L1.037,11.477a.321.321,0,0,0-.057.08l0,.01a.269.269,0,0,0-.024.081L0,18.838a.159.159,0,0,0,0,.019.314.314,0,0,0,.007.079.343.343,0,0,0,.009.044.3.3,0,0,0,.043.074.243.243,0,0,0,.018.03l0,0,0,.005a.286.286,0,0,0,.1.066l.007,0a.3.3,0,0,0,.115.019l.009,0,11.832-.671h0l5.751-.325.015,0a.351.351,0,0,0,.07-.017l.009,0,.011,0h0l.007,0A.285.285,0,0,0,18.1,18.1a.271.271,0,0,0,.056-.081l0-.007h0l0-.011,0-.01a.253.253,0,0,0,.017-.07.112.112,0,0,0,0-.016l1-17.585s0-.006,0-.009a.32.32,0,0,0-.02-.117m-1.507,16.46-1.079-2.369-.189-8.37,1.522,6.253Zm-5.487,1.254L5.913,16.384l8.369.19,2.371,1.078ZM1.524,11.916,4.57,10.876,3.035,15.439,1.311,13.521Zm12-10.6,1.917,1.724L10.875,4.57l1.04-3.046Zm-.527,4.445-1.727-.683L14.9,3.851Zm-2.942,3.8,2.9-2.9,2.676,6.877Zm3.471,6.081L6.647,12.957l2.9-2.9Zm-2.9-10.169,1.906.755L10.052,8.7ZM9.33,9.329l-3.82.678,1.2-3.3,3.3-1.2Zm-.631.723-2.48,2.48-.755-1.906ZM5.757,12.994,3.851,14.9l1.222-3.632Zm.427.426,6.469,2.515-8.786-.2Zm4.68-2.556,5.171,3.681,1.245,2.734-2.734-1.243Zm2.555-4.679,2.318-2.318.2,8.784Zm-3.264-1.37-2.514.911,3.345-3.345Zm-5.34,5.341-2.434.831L5.726,7.642ZM2.742,16.008l-2.03,2.03.5-3.737Zm.508.345,6.858,1.669-9.039.512Zm13.1-13.1,2.183-2.183-.512,9.041Zm-.344-.509L14.3,1.208l3.737-.5Z" transform="translate(0 0)" fill="#f8fafb" />
                        </g>
                      </svg>

                      +200,000 QAR
              </div>
              <div className='benefits_item'>5 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'>Meal & Drink For 2 - Twice A Year</div>
              <div className='benefits_item'>20%</div>
              <div className='benefits_item'>20% 3 Days</div>
              <div className='benefits_item'> <NextImage
                        src="/images/check-circle.svg"
                        alt="check icon"
                        className=""
                        height="25"
                        width="18"
                      /></div>
              <div className='benefits_item'>  <NextImage
                        src="/images/check-circle.svg"
                        alt="check icon"
                        className=""
                        height="25"
                        width="18"
                      /></div>
              <div className='benefits_item'> Free</div>
            </div>
          </div>

          <div className='benefits d-flex'>
            <div className='benefits_head'>
              <div className='benefits_title'>Experiences</div>
              <div className='benefits_item'>Alterations</div>
              <div className='benefits_item'>Free Delivery/ Hands Free Shopping</div>
              <div className='benefits_item'>Valet Service (Annually)</div>
              <div className='benefits_item'>Concierge Service</div>
              <div className='benefits_item'>Private Pre Sale</div>
              <div className='benefits_item'>Exclusive Events</div>
              <div className='benefits_item'>Invitation To Trunk Show/New Collection</div>
              <div className='benefits_item'>Live Virtual Shopping With Printemps Paris</div>
              <div className='benefits_item'>Meet & Greet With Top Designer In Doha</div>
              <div className='benefits_item'>Meet & Greet With Top Designer In Doha</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title one'>
                Topaz
                <svg width="27.127" height="27.127" viewBox="0 0 27.127 27.127">
                  <g id="Group_738" data-name="Group 738" transform="translate(13.563) rotate(45)">
                    <g id="Group_632" data-name="Group 632" transform="translate(0 0)">
                      <path id="Path_4187" data-name="Path 4187" d="M17,6.2c-.049-.065-.081-.105-.086-.111a17.087,17.087,0,0,0-2.023-1.758.239.239,0,0,0-.028-.021A20.354,20.354,0,0,0,9.807,1.623a.32.32,0,0,0-.163-.061A26.433,26.433,0,0,0,4.568.3.282.282,0,0,0,4.5.275a.275.275,0,0,0-.057,0A24.278,24.278,0,0,0,.309.007L.3.009a.219.219,0,0,0-.042.01.233.233,0,0,0-.032,0C.223.024.22.028.213.031L.188.039A.347.347,0,0,0,.149.067.319.319,0,0,0,.11.094L.093.11A.347.347,0,0,0,.066.149.284.284,0,0,0,.04.188.2.2,0,0,0,.031.214C.029.219.024.223.023.229a.136.136,0,0,0,0,.031A.213.213,0,0,0,.009.3l0,.005A24.079,24.079,0,0,0,.28,4.434a.28.28,0,0,0,0,.062A.29.29,0,0,0,.3,4.573a26.514,26.514,0,0,0,1.26,5.056V9.64a.317.317,0,0,0,.072.181,20.3,20.3,0,0,0,2.678,5.024.3.3,0,0,0,.061.086,17.287,17.287,0,0,0,1.742,2s.037.03.092.072a.314.314,0,0,0,.219.16,12.191,12.191,0,0,0,2.342,1.3.184.184,0,0,0,.026.023.3.3,0,0,0,.122.039,9.094,9.094,0,0,0,2.739.648.315.315,0,0,0,.163.01,6.527,6.527,0,0,0,2.612-.406c.012,0,.024,0,.035-.006a.258.258,0,0,0,.029-.018,7.085,7.085,0,0,0,2.446-1.632l.082-.083.09-.089h0a7.071,7.071,0,0,0,1.631-2.446.272.272,0,0,0,.018-.027.192.192,0,0,0,.005-.035,6.526,6.526,0,0,0,.406-2.611.316.316,0,0,0-.011-.166,9.051,9.051,0,0,0-.647-2.734.341.341,0,0,0-.038-.127c-.007-.011-.017-.018-.026-.029A12.167,12.167,0,0,0,17.161,6.43.313.313,0,0,0,17,6.2m.792,2.611-.518.294-.054-1.423a11.385,11.385,0,0,1,.572,1.129m.471,5.115-.751-.287,1.011-1.055a5.871,5.871,0,0,1-.26,1.342m-5.7,4.613,1.082-1.037.292.765a5.819,5.819,0,0,1-1.374.272m-4.907-1.33,1.456.054-.307.54a11.038,11.038,0,0,1-1.149-.595m-.6-15.778L4.7,1.321,4.739.969c.722.113,1.5.264,2.315.467M3.682,4.358,3.8,7.534,2.133,4.588Zm10.9,10.219-3.025,1.41L8.74,14.621,4.49,8.726,4.322,4.32l4.406.169L14.621,8.74l1.366,2.813Zm-5.3,1.014,1.427.693-.9.3Zm6.315-6.316.989.53-.3.9Zm-1.51-1.712L10.527,5l2.748.8ZM8.957,3.876,5.665,2.009,9.5,2.2l2.824,2.663ZM4.588,2.132,7.534,3.8,4.358,3.681ZM3.706,3.706l-1.86.276L.824.824,3.982,1.845ZM7.563,14.08l-1.758-.8L5,10.527ZM8.3,15.119l.809,1.509-2.378-.09-.7-2.456Zm3.267,1.558,1.572.426-1.382,1.325L10.277,17.1Zm2.033-.112-1.115-.3,1.642-.765Zm1.462-1.505L16.6,14.3l-.1,2.192L14.3,16.6Zm.437-.933.765-1.642.3,1.115Zm1.178-2.561.426-1.288,1.326,1.478L17.1,13.138Zm-.047-2.458L15.119,8.3,14.082,6.034l2.457.7Zm-5.513-6.26A18.886,18.886,0,0,1,14.18,4.6l-.659.513ZM4.066,1.2,2.556.713C3.017.748,3.539.8,4.1.876ZM1.2,4.066.877,4.1C.8,3.539.749,3.018.713,2.558ZM3.876,8.956l.983,3.363L2.2,9.5,2.01,5.665Zm1.241,4.565-.511.655a19.025,19.025,0,0,1-1.751-3.052ZM5,14.713l.4-.512.424,1.5c-.29-.323-.565-.653-.824-.99m4.732,2.759,1.087.975a8.516,8.516,0,0,1-1.417-.393Zm4.49-.231,1.7-.08a6.374,6.374,0,0,1-1.393.876Zm3.015-3.015.788.3a6.272,6.272,0,0,1-.868,1.394Zm.231-4.49.557-.317a8.933,8.933,0,0,1,.378,1.357ZM14.2,5.4l.517-.4q.506.391.992.828ZM.97,4.738,1.322,4.7,1.436,7.04c-.2-.811-.353-1.585-.466-2.3" transform="translate(0 0)" fill="#f8fafb" />
                    </g>
                  </g>
                </svg>
                0 To 49,999 QAR
              </div>
              <div className='benefits_item'> 2 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'> 1 Coffee + 1 Pastry</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title two'>
              Emerald
                      <svg width="19.312" height="19.313" viewBox="0 0 19.312 19.313">
                        <defs>
                          <clipPath id="clipPath">
                            <rect id="Rectangle_822" data-name="Rectangle 822" width="19.312" height="19.313" fill="#f8fafb" />
                          </clipPath>
                        </defs>
                        <g id="Group_633" data-name="Group 633" clipPath="url(#clipPath)">
                          <path id="Path_4188" data-name="Path 4188" d="M11.085.125A.214.214,0,0,0,11.055.1.2.2,0,0,0,11.01.088.123.123,0,0,0,10.988.08s-.008,0-.012,0-.01,0-.016,0L7.951,0a.224.224,0,0,0-.027.005c-.009,0-.017,0-.026,0a.067.067,0,0,0-.014.007.185.185,0,0,0-.04.017.221.221,0,0,0-.036.024s-.01,0-.014.009L.062,7.794a.112.112,0,0,0-.009.014.177.177,0,0,0-.024.037.186.186,0,0,0-.017.038A.073.073,0,0,0,.005,7.9a.227.227,0,0,0,0,.028c0,.009,0,.017,0,.026l.077,3.01s0,.009,0,.014,0,.009,0,.014.007.016.009.024a.229.229,0,0,0,.015.042.265.265,0,0,0,.023.033.231.231,0,0,0,.014.021L8.28,19.249a.218.218,0,0,0,.164.063l2.717-.134a.214.214,0,0,0,.236.111.212.212,0,0,0,.1-.057.208.208,0,0,0,.051-.084.218.218,0,0,0,.082-.048L19.1,11.635a.21.21,0,0,0,.048-.082.207.207,0,0,0,.084-.051.212.212,0,0,0-.054-.34l.134-2.717a.216.216,0,0,0-.063-.165L11.109.141a.214.214,0,0,0-.024-.016M.749,11.109l1.159-.17,3.223,3.223,3.224,3.224-.17,1.159ZM.439,8.221l1.272.3.051,2L.5,10.708ZM10.707.5l-.184,1.26-2-.051L8.221.439Zm3.15,4.934,3,3-.981.144L13.3,6,10.717,3.422l.144-.982Zm.148,8.569-2.938,2.938-.184-.783,2.638-2.638,2.638-2.638.783.183Zm-8.569-.148-3-3,.981-.144L6,13.3l2.578,2.578-.143.981ZM5.289,5.289,8.226,2.352l.184.783L5.772,5.773,3.134,8.411l-.783-.184Zm7.7,1.014,2.351,2.352-.6.088-2.1-2.1-2.1-2.1.088-.6Zm.224,6.912-2.448,2.448-.2-.836L12.7,12.7l2.128-2.128.836.2ZM6.3,12.991,3.952,10.64l.6-.087,2.1,2.1,2.1,2.1-.088.6ZM6.079,6.079,8.527,3.632l.2.836L6.6,6.6,4.467,8.724l-.836-.2Zm8.457,4.169-2.144,2.145-2.144,2.144L9.066,14.46,6.95,12.344,4.835,10.229,4.759,9.047,6.9,6.9,9.046,4.759l1.182.076L12.344,6.95,14.46,9.066ZM10.137,4.4l-1-.065-.2-.864,1.311.208ZM4.332,9.135l.065,1-.721.106-.208-1.31ZM9.157,14.9l1,.065.2.865-1.31-.209Zm5.805-4.738-.065-1,.721-.106.208,1.312ZM10.305,3.249l-1.48-.235-.2-.867,1.838.047ZM3.013,8.826l.235,1.48-1.056.155L2.146,8.622Zm5.977,7.222,1.48.235.2.867L8.834,17.1Zm7.292-5.578-.235-1.48L17.1,8.835l.047,1.838ZM8.11,1.854,4.982,4.982,1.854,8.11.644,7.826,7.826.644Zm.662,15.678,2,.051.274,1.167-2.473.122Zm2.413-.091,3.128-3.128,3.128-3.128,1.21.284-7.182,7.182Zm6.4-6.666-.051-2,1.34-.2-.122,2.473Zm-.2-2.419L14.162,5.132,10.939,1.909l.17-1.16,7.437,7.437Z" transform="translate(0 0)" fill="#f8fafb" />
                        </g>
                      </svg>

                      50,000 To 99,999 QAR 
              </div>
              <div className='benefits_item'>3 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'> 2 Coffees + 2 Pastries</div>
              <div className='benefits_item'>10%</div>
              <div className='benefits_item'>10% 1 Day</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title three'>
              Ruby
                      <svg width="27.155" height="27.155" viewBox="0 0 27.155 27.155">
                        <defs>
                          <clipPath id="clipPath">
                            <rect id="Rectangle_883" data-name="Rectangle 883" width="19.18" height="19.223" fill="#f8fafb" />
                          </clipPath>
                        </defs>
                        <g id="Group_739" data-name="Group 739" transform="translate(13.593) rotate(45)" clipPath="url(#clipPath)">
                          <path id="Path_4260" data-name="Path 4260" d="M19.18,19.223l-5.249-.014c-1.092,0-2.184.012-3.275-.016A1.06,1.06,0,0,1,10,18.92Q5.148,14.1.325,9.252a.861.861,0,0,1-.259-.52C.033,5.87.019,3.007,0,0,1.123.027,2.145.066,3.169.072c1.8.01,3.609-.011,5.414.008a1.037,1.037,0,0,1,.653.27q4.846,4.826,9.664,9.679a.8.8,0,0,1,.248.475c.022,2.879.026,5.758.033,8.719M15.3,15.35c-.013-1.115-.011-2.126-.048-3.135A1,1,0,0,0,15,11.6Q11.341,7.9,7.654,4.238c-.107-.107-.254-.244-.386-.247-1.087-.028-2.176-.028-3.327-.037.007,1.132,0,2.191.03,3.248a.752.752,0,0,0,.232.44q3.7,3.719,7.42,7.42a.753.753,0,0,0,.435.242c1.041.031,2.083.033,3.242.046m-5,2.687c.3-.716.6-1.375.851-2.049.038-.1-.068-.3-.164-.4Q7.35,11.941,3.7,8.307c-.1-.1-.292-.22-.388-.185-.69.252-1.364.542-2.091.839L10.3,18.037M8.944,1.254c-.294.713-.575,1.362-.82,2.024a.486.486,0,0,0,.135.4q3.646,3.666,7.313,7.313c.085.085.264.176.356.143.677-.246,1.343-.522,2.08-.815L8.944,1.254m9.3,9.86c-.571.227-1.159.478-1.761.69a.5.5,0,0,0-.4.579,7.758,7.758,0,0,1-.008,1.514,2.73,2.73,0,0,0,1.163,2.815,9.754,9.754,0,0,1,1.027,1.011c-.006-2.259-.01-4.409-.016-6.608M1,1.6C1,3.812,1,5.972.994,8.165c.629-.259,1.287-.514,1.927-.809a.53.53,0,0,0,.211-.409c.018-.963.015-1.925,0-2.889a.685.685,0,0,0-.12-.432C2.361,2.945,1.686,2.282,1,1.6m.645-.579a.149.149,0,0,0,.029.083c.634.642,1.265,1.286,1.912,1.915a.6.6,0,0,0,.383.13q1.5.017,2.99,0c.121,0,.314-.062.353-.149.3-.67.57-1.353.817-1.952L1.648,1.02m15.958,17.22c-.667-.667-1.349-1.355-2.044-2.032a.492.492,0,0,0-.312-.069c-.979-.006-1.958-.009-2.936,0-.125,0-.322.056-.362.143-.307.665-.584,1.344-.851,1.974l6.505-.018" transform="translate(0 0)" fill="#f8fafb" />
                        </g>
                      </svg>

                      100,000 To 199,999 QAR 
              </div>
              <div className='benefits_item'>4 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'>Meal & Drink For 2</div>
              <div className='benefits_item'>15%</div>
              <div className='benefits_item'>15% 2 Days</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
              <div className='benefits_item'>  -</div>
            </div>
            <div className='benefits_body'>
              <div className='benefits_title four'>
              Diamond
                      <svg width="27.124" height="27.124" viewBox="0 0 27.124 27.124">
                        <defs>
                          <clipPath id="clipPath">
                            <rect id="Rectangle_884" data-name="Rectangle 884" width="19.18" height="19.179" fill="#f8fafb" />
                          </clipPath>
                        </defs>
                        <g id="Group_740" data-name="Group 740" transform="translate(13.562) rotate(45)" clipPath="url(#clipPath)">
                          <path id="Path_4261" data-name="Path 4261" d="M19.159.193V.187a.286.286,0,0,0-.066-.1l-.005,0,0,0a.152.152,0,0,0-.028-.017.293.293,0,0,0-.075-.044.236.236,0,0,0-.043-.009A.3.3,0,0,0,18.856,0a.159.159,0,0,1-.019,0L11.649.953a.292.292,0,0,0-.079.023l-.013,0a.306.306,0,0,0-.079.057L1.037,11.477a.321.321,0,0,0-.057.08l0,.01a.269.269,0,0,0-.024.081L0,18.838a.159.159,0,0,0,0,.019.314.314,0,0,0,.007.079.343.343,0,0,0,.009.044.3.3,0,0,0,.043.074.243.243,0,0,0,.018.03l0,0,0,.005a.286.286,0,0,0,.1.066l.007,0a.3.3,0,0,0,.115.019l.009,0,11.832-.671h0l5.751-.325.015,0a.351.351,0,0,0,.07-.017l.009,0,.011,0h0l.007,0A.285.285,0,0,0,18.1,18.1a.271.271,0,0,0,.056-.081l0-.007h0l0-.011,0-.01a.253.253,0,0,0,.017-.07.112.112,0,0,0,0-.016l1-17.585s0-.006,0-.009a.32.32,0,0,0-.02-.117m-1.507,16.46-1.079-2.369-.189-8.37,1.522,6.253Zm-5.487,1.254L5.913,16.384l8.369.19,2.371,1.078ZM1.524,11.916,4.57,10.876,3.035,15.439,1.311,13.521Zm12-10.6,1.917,1.724L10.875,4.57l1.04-3.046Zm-.527,4.445-1.727-.683L14.9,3.851Zm-2.942,3.8,2.9-2.9,2.676,6.877Zm3.471,6.081L6.647,12.957l2.9-2.9Zm-2.9-10.169,1.906.755L10.052,8.7ZM9.33,9.329l-3.82.678,1.2-3.3,3.3-1.2Zm-.631.723-2.48,2.48-.755-1.906ZM5.757,12.994,3.851,14.9l1.222-3.632Zm.427.426,6.469,2.515-8.786-.2Zm4.68-2.556,5.171,3.681,1.245,2.734-2.734-1.243Zm2.555-4.679,2.318-2.318.2,8.784Zm-3.264-1.37-2.514.911,3.345-3.345Zm-5.34,5.341-2.434.831L5.726,7.642ZM2.742,16.008l-2.03,2.03.5-3.737Zm.508.345,6.858,1.669-9.039.512Zm13.1-13.1,2.183-2.183-.512,9.041Zm-.344-.509L14.3,1.208l3.737-.5Z" transform="translate(0 0)" fill="#f8fafb" />
                        </g>
                      </svg>

                      +200,000 QAR
              </div>
              <div className='benefits_item'>5 Days</div>
              <div className='benefits_item'> <NextImage
                src="/images/check-circle.svg"
                alt="check icon"
                className=""
                height="25"
                width="18"
              /></div>
              <div className='benefits_item'>2X Points + Gift</div>
              <div className='benefits_item'>Meal & Drink For 2 - Twice A Year</div>
              <div className='benefits_item'>20%</div>
              <div className='benefits_item'>20% 3 Days</div>
              <div className='benefits_item'> <NextImage
                        src="/images/check-circle.svg"
                        alt="check icon"
                        className=""
                        height="25"
                        width="18"
                      /></div>
              <div className='benefits_item'>  <NextImage
                        src="/images/check-circle.svg"
                        alt="check icon"
                        className=""
                        height="25"
                        width="18"
                      /></div>
              <div className='benefits_item'> Free</div>
            </div>
          </div>
        </div>
        <div className='mb-3 mt-3 process_display'>
          <div className='container'>
            <div className='row process_row'>
              <div className='col-md-6 col-lg-6 col-sm-12 col-sx-12'>

                <h2 className="section_title">{translate('process')}</h2>
                <p className='mb-3'> {translate('processDesc')}</p>
                <div className='d-flex process'>
                  <div className='card'>
                    <NextImage
                      src="/images/Pflower.svg"
                      alt="home"
                      className=""
                      height="50"
                      width="50"
                    />
                    <h3 className='title' >{translate('presentCard')} </h3>
                    <p className='description'> {translate('process1')}</p>
                  </div>
                  <div className='card'>
                    <NextImage
                      src="/images/Pflower.svg"
                      alt="home"
                      className="p-svg"
                      height="50"
                      width="50"
                    />
                    <h3 className='title' >{translate('earnpoints')} </h3>
                    <p className='description'>For All Your Purchases At Amina Store.</p>
                  </div>
                </div>
                <div className='d-flex process'>
                  <div className='card card2'>
                    <NextImage
                      src="/images/Pflower.svg"
                      alt="home"
                      className="p-svg"
                      height="50"
                      width="50"
                    />
                    <h3 className='title' >{translate('redeempoints')}</h3>
                    <p className='description'>To discount vouchers at Amina Store.</p>
                  </div>

                </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12 col-sx-12 imgs'>
                <NextImage
                  src="/images/small.png"
                  alt="home"
                  className="small-img "
                  height="174"
                  width="213"
                />
                <span className='big-img'>
                <NextImage
                  src="/images/process-img.png"
                  alt="home"
                  className=""
                  height="438"
                  width="353"
                />
                </span>
              

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

 


export default TiersList;

export async function getStaticProps({locale}) {
  const tiersResponse = await fetcher(
    `${baseUrl}/tiers?populate=*`
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common','loyalty'])),
      tiers: tiersResponse,
    },
  };
}