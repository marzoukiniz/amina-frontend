import { useRouter } from 'next/router';
import Link from "next/link"
import { useTranslation } from 'next-i18next';
import NextImage from "./Image"
import { useEffect, useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import { UserContext } from '../../context/user';
import LoginForm from '@/components/LoginForm';
import LanguageSwitcher from './LanguageSwitcher';
import Logout from './Logout';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
export default function RightMenu() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const { locale } = useRouter();
  const { t: translate } = useTranslation('loyalty');
  
  const pathname = usePathname();

  const { user, checkLogin, id } = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await checkLogin();
      if (res.status === 200) {

      }

    }
    fetchData();
  }, []);
  if (user) {
    router.push('/user/dashboard');
  }

  return (
    <>

<div className="right-menu">
        <a href="#" className="header-icon">
          <svg id="search_menuIcon" data-name="search menuIcon" width="26.264" height="26.264" viewBox="0 0 26.264 26.264">
            <path id="Path_5" data-name="Path 5" d="M0,0H26.264V26.264H0Z" fill="none" />
            <path id="Path_6" data-name="Path 6" d="M19.818,18.246l4.76,4.759-1.573,1.573-4.759-4.76a10.005,10.005,0,1,1,1.572-1.572Zm-2.23-.825a7.777,7.777,0,1,0-.167.167l.167-.167Z" transform="translate(0 0)" fill="#636262" />
          </svg>
        </a>
        <LanguageSwitcher />
        <div className="user-nav">


        </div>
        {id && (
          <>
            <div className="logged-user">
              
              <p className="welcome">{translate('welcomeLogin')}<span className="username">{id}</span> </p>

              <div className="dropdown">
              <span className=" user-icon dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                <NextImage
                  src="/user.png"
                  alt="user icon"
                  height="33"
                  width="33"
                />
              </span>
              <ul className="dropdown-menu logged-user-menu" aria-labelledby="dropdownMenuButton3">
                <li><Link className="dropdown-item" href="/user/dashboard">
                <svg className="dashboard-icon" viewBox="0 0 24 24">
                  <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z" fill="#57667d"></path></svg>
                  
                  {translate('dashboard')}</Link></li>

                <li><a className="dropdown-item" href="#">
                <svg  className="profile-icon" viewBox="0 0 24 24">
                  <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="#57667d"></path></svg>
                   {translate('profile')}</a></li>
                <li><a className="dropdown-item" href="#">
                  <Logout />

                </a></li>
              </ul>
            </div>
            </div>

            

        
          </>
        )}
        {!id && (

          <Button
            color="primary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          > {translate('login')}
          </Button>

        )}
      </div>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>

<ModalBody>  <LoginForm /> </ModalBody>

</Modal>
      </>
  );
}