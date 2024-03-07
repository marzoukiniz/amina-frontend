import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from 'react-icons/fi';
import { RiStackLine } from 'react-icons/ri';
import { CiLogout } from 'react-icons/ci';
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
import { SidebarContext } from "../../../context/SidebarContext";
import { useContext } from "react";
import {CiShoppingBasket ,CiHeart,CiUser,CiGrid41} from "react-icons/ci";
import { useTranslation } from 'next-i18next';
 import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const Sidebar = ({ children }) => {
    const { t: translate } = useTranslation(['loyalty','common']);
    const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
    return (
        <div className="d-flex">
            <div className="side   h-100" data-collapse={isCollapsed}>
                <button onClick={toggleSidebarcollapse} className="btn-expand">    
                
                {isCollapsed ? <IoIosArrowBack size={25} />: <IoIosArrowForward size={25} />}
                </button>
                <div className="top-nav">
                    <Link href='/user/dashboard'>
                        <div className="system-logo ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.285" height="27.469" viewBox="0 0 27.285 27.469">
  <g id="Group_1" data-name="Group 1" transform="translate(-551.18 -363.269)">
    <path id="Path_2" data-name="Path 2" d="M4.5,0H5.75a4.5,4.5,0,0,1,4.5,4.5V21.3a4.5,4.5,0,0,1-4.5,4.5H4.5A4.5,4.5,0,0,1,0,21.3V4.5A4.5,4.5,0,0,1,4.5,0Z" transform="translate(556.689 368.394) rotate(-30)" fill="#00a850"/>
    <path id="Path_3" data-name="Path 3" d="M5.3,0A5.3,5.3,0,1,1,0,5.3,5.3,5.3,0,0,1,5.3,0Z" transform="translate(551.18 377.84)" fill="#00a850"/>
  </g>
</svg>

                        </div>
                    </Link>
                    <span className='divider'></span>
                    <Link href='/user/dashboard' className="item-nav mt-2">
                        <div className="icon-zone">
                            <CiGrid41 size={20} />
                        </div>
                        <p className="link-title">{translate('dashboard')}</p>
                    </Link>
                    <Link href='/user/dashboard/profile' className="item-nav">
                        <div className="icon-zone">
                            <CiUser size={20} />
                        </div>
                        <p className="link-title">{translate('profile')}</p>
                    </Link>
                    <Link href='/user/dashboard/loyalty' className="item-nav">
                        <div className="icon-zone">
                            <CiHeart size={20} />
                        </div>
                        <p className="link-title">{translate('loyalty')}</p>
                    </Link>
                    <Link href='/user/dashboard/purchases' className="item-nav">
                        <div className="icon-zone">
                            <CiShoppingBasket size={20} />
                        </div>
                        <p className="link-title">{translate('purchaseHistory')}</p>
                    </Link>
                </div>
                <div className="bottom-nav">
                    <Link href='/user/logout' className="item-nav">
                        <div className="icon-zone logout">
                            <CiLogout size={20} />
                        </div>
                        <p className="link-title">{translate('logout')}</p>
                    </Link>
                </div>

            </div>
            <main className="display-pages h-100 ">{children}</main>
        </div>
    )
}
export default Sidebar