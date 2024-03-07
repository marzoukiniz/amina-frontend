import React from 'react'
import {RxSketchLogo, RxDashboard,RxPerson} from "react-icons/rx";
import {SiLevelsdotfyi} from 'react-icons/si';
import BarChart from './BarChart';
import RecentOrders from './RecentOrders';
import {AiFillHeart} from 'react-icons/ai'
import { useTranslation } from 'next-i18next';
import {RiBubbleChartFill,RiShoppingBagFill,RiShoppingCart2Fill,RiArrowRightUpLine} from 'react-icons/ri'
const TopCards = () => {
    const { t: translate } = useTranslation(['loyalty','common']);
  return (
    <div className='row top-cards'>
        <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12  p-0 box-no   flex dis-card justify-between w-full '>
           
            <div className='loyalty-card bg-white box-yes   p-4'>
            <div className='item'>
                    <div className='icon'><AiFillHeart size={24}/></div>
                    <div className='values'>
                    <div className='title'>1 Heart</div>
                    <div className='value'>1023 {translate('points')}<RiArrowRightUpLine/></div>
                    </div>
                </div>
            </div>
            <div className='recent-orders bg-white box-yes p-4'>
            <RecentOrders/>
            </div>
        
            
        </div>
         
        <div className=' col-lg-8 col-md-8 col-sm-12 col-xs-12  dis-card bg-white flex justify-between w-full   p-4 rounded-lg'>
            <div className='top-statistic'>
                <div className='item'>
                    <div className='icon bg-red'><RiShoppingCart2Fill size={24}/></div>
                    <div className='values'>
                    <div className='title'> {translate('purchaseNo')}</div>
                    <div className='value'>25 <RiArrowRightUpLine/></div>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon bg-yellow'><RiShoppingBagFill size={24}/></div>
                    <div className='values'>
                    <div className='title'>{translate('purchases')}</div>
                    <div className='value'>12 <RiArrowRightUpLine/></div>
                    </div>
                </div>
             
                <div className='item'>
                    <div className='icon bg-orange'><RiBubbleChartFill size={24}/></div>
                    <div className='values'>
                    <div className='title'>{translate('latestPT')}</div>
                    <div className='value'>150<RiArrowRightUpLine/></div>
                    </div>
                </div>
                <div className='item'>
                    <div className='icon bg-green'><SiLevelsdotfyi size={24}/></div>
                    <div className='values'>
                    <div className='title'>{translate('currentLv')}</div>
                    <div className='value'>01 <RiArrowRightUpLine/></div>
                    </div>
                </div>
            </div> <br/>
            <p className='dashboard-section-title  '>{translate('lastWeekPT')}</p>
            <BarChart/>
        </div>
    </div>
  )
}

export default TopCards