import { useRouter } from 'next/router';
import NextImage from "./Image"
import { useEffect, useContext,useState } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
 
  const { locale,locales, push ,pathname} = router;
  const handelClick =l => () =>{
    if(l === 'ar'){
      document.body.dir = "rtl";
    }
    else{
      document.body.dir = "ltr";
    }
    router.push(pathname, undefined, { locale: l })
  } 

  return (
    <>
     

      <div className="dropdown">
  <button className="lang-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {locale}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li   onClick={handelClick('en')}><a className="dropdown-item" href="#"> 
    <NextImage
          src="/images/icons8-british-flag-16.png"
          alt="home"
          className="lang-flag"
          height="16"
          width="16"
        />English</a></li>
        
    <li onClick={handelClick('ar')}><a className="dropdown-item" href="#">
    <NextImage
          src="/images/icons8-qatar-24.png"
          alt="home"
          className="lang-flag"
          height="16"
          width="16"
        />Arabic</a></li>
    <li onClick={handelClick('fr')}><a className="dropdown-item" href="#"> <NextImage
          src="/images/icons8-french-flag-24.png"
          alt="home"
          className="flang-flag"
          height="16"
          width="16"
        />French</a></li>
  </ul>
</div>
    </>
  );
}