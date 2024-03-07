import Head from 'next/head'
import Link from "next/link"
import NextImage from "../../../components/Image";
import Purchases from '../../../components/dashboard/Purchases';
import { fetcher } from '../../../utils/api';
import axios from 'axios';
import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Sidebar from '@/components/dashboard/Sidebar';
 import RightMenu from '@/components/RightMenu';
 import {useContext} from 'react';
import { usePathname } from 'next/navigation';
import { UserContext } from '../../../../context/user';
  import cookie from 'cookie';
  import qs from 'qs';
  import {TiLocationArrow} from 'react-icons/ti'
 import DTable from '@/components/dashboard/DTable'; 
const PurchaseHistory = ({ purchases }) => {
  const router = useRouter()
  const {locale} = useRouter();
  const { t: translate } = useTranslation(['loyalty','common']);
  const {id } = useContext(UserContext);
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
 
  return (
    <Sidebar>
 
    <div className='row'>
      <div className='col-12   '>
        <div className='breadc'>
        <nav aria-label="breadcrumb" class="breadcrumbs medium-font">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link href='/' >{translate('home')}</Link> </li>
            <li class="breadcrumb-item active" aria-current="page"> {translate('purchaseHistory')}</li>
          </ol>
        </nav>
       <RightMenu/>
       </div>
      </div>
    </div>
 
   
   <div className='row  '>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  justify-between w-full   rounded-lg'>
         <div className='profile-top-card '>
          <DTable purchases={purchases}/>
         {/* <Purchases purchases={purchases} /> */}
          
         </div>
      </div>
 
      
      </div>
     
  </Sidebar>
  );
};

 


export default PurchaseHistory;

// export async function getStaticProps({locale}) {

//   if (req.method === 'GET') {
//     const { token } = cookie.parse(req.headers.cookie);
//     if (!token) {
//       res.status(403).json({ message: 'not authorized' });
//     }
//     await axios
//       .get('api/purchases?populate=*', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         res.status(200).json({
//           purchases: response.data  
//         });
//       })
//       .catch((error) => {
//         res.status(403).json({ message: 'not authorized' });
//       });
   
//   }

//   const purchasesResponse = await fetcher(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/purchases?populate=*`
//   );
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common','loyalty'])),
//       purchases: purchasesResponse,
//     },
//   };
// }

export async function getServerSideProps({ req,locale }) {
 
  const companyJobs = await getJobsByCompanyId({req, id: 13 });
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common','loyalty'])),
        purchases: companyJobs,
      },
    };
  
}


 



export const getJobsByCompanyId = async ({req, id }) => {
  const query = qs.stringify(
    {
      filters: {
        users_permissions_user: {
          id: {
            $eq: id,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
 
  const { token } = cookie.parse(req.headers.cookie);
  const res = await axios.get(
    `http://localhost:1337/api/purchases?${query}`,{
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    }
  );
  const rawJobs = res.data;
 
  return rawJobs;
};