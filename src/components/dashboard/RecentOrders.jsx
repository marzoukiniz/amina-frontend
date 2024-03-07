import React from 'react';
import { data } from '../../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
const RecentOrders = () => {
  const { t: translate } = useTranslation(['loyalty','common']);
  return (
    <div className='recent-orders'>
      <p className=' '> {translate('recentOrders')}</p>
      <ul className='list-group  '>
        {data.map((order, id) => (
          <li
            key={id}
            className='list-group-item d-flex justify-content-between  '
          > <div className='icon-zone'><FaShoppingBag/></div>
            <div className='ms-2 me-auto'>
            <div className=" order">{order.name.first}</div>
              <p className='text-gray-800  order-total'>Qar {order.total}</p>
            </div>
            <div className='details'>
            <span className='status'>{order.status}</span> 
            <span className="date"> {order.date}</span>
            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;