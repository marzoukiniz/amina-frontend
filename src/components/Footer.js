import NextImage from "./Image"
import {useTranslation } from 'next-i18next'; 
import Link from "next/link"
 
  
const Footer = () => {
  const { t: translate} = useTranslation('common');
  return (
    
    <div className="footer mt-4 py-3">
     <footer className="footer mt-4 py-3  ">
    <div className="container">

      <div className="row">
        <div className="col-12 p-2 ">
        <Link href="/" className="main-logo">
      <NextImage
        src="/main-logo-white.svg"
        alt="home"
        className="logo"
        height="44"
        width="150"
      />
    </Link>

        </div>
      </div>
      <hr className="solid" />
      <div className="row middle">
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <div><span>{translate('fashion')} </span></div>
        </div>
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <div><span>{translate('luxury')}</span> </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <div><span>{translate('accessoiries')}</span> </div>
        </div>
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <div><span>{translate('beauty')}</span> </div>
        </div>
      </div>
      <hr className="solid" />
      <div className="row p-2 actions">
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-left">
         <div className="row">
         <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12  "> <div className="quick-links">
            <a href="#" className="link-item">Our adventure
              <button type="button" className="linkbtn"></button>
            </a>
            <a href="#" className="link-item">Join us
              <button type="button" className="linkbtn"></button>
            </a>
            <a href="#" className="link-item">Contact us
              <button type="button" className="linkbtn"></button>
            </a>
            <a href="#" className="link-item">Legal Notice
              <button type="button" className="linkbtn"></button>
            </a>
          </div>
</div>
         <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12  "> 
         
         <div className="quick-links">
            <a href="#" className="link-item">Category 1
              <button type="button" className="linkbtn"></button>
            </a>
            <a href="#" className="link-item">Category 2
              <button type="button" className="linkbtn"></button>
            </a>
            <a href="#" className="link-item">Category 3
              <button type="button" className="linkbtn"></button>
            </a>
            <a href="#" className="link-item">Category 4
              <button type="button" className="linkbtn"></button>
            </a>
          </div>

         </div>
         </div>
         
          
        </div>
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 text-right">
          {/* <p className="newsletter-title">Keep in touch !</p> */}
          <form className="row g-3 newsletter">

            <div className="col-8">

              <input type="text" className="form-control" placeholder="email@example.com" disabled />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-primary "><svg width="16.5" height="13.549"
                  viewBox="0 0 16.5 13.549">
                  <g id="Iconly_Light-Outline_Arrow---Right" data-name="Iconly/Light-Outline/Arrow---Right"
                    transform="translate(-4 -4.951)">
                    <g id="Arrow---Right" transform="translate(4 18.5) rotate(-90)">
                      <path id="Combined-Shape"
                        d="M6.774,0a.75.75,0,0,1,.743.648l.007.1V13.934l4.744-4.763a.75.75,0,0,1,1.135.974l-.072.084-6.024,6.05a.751.751,0,0,1-.124.1l-.041.024-.037.02-.056.024-.043.016-.056.016-.04.008-.06.008-.046,0H6.745l-.044,0,.073,0a.753.753,0,0,1-.139-.013L6.6,16.48c-.023-.005-.044-.011-.066-.019L6.5,16.45c-.023-.009-.044-.018-.065-.029l-.03-.016-.048-.029-.033-.024-.009-.007a.75.75,0,0,1-.075-.066h0L.218,10.229A.75.75,0,0,1,1.2,9.1l.084.073,4.743,4.761V.75A.75.75,0,0,1,6.774,0Z"
                        fill="#fff" />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-left">
          <span className="copy">{translate('copyRight')}</span>
        </div>
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-center">
          
        </div>
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12 text-right">
          <div className="social-media">
            <a href="https://www.instagram.com/amina.grp/" className="item">
              <svg className="svg-icon" width="33" height="33" viewBox="0 0 33 33">
                <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-1.5 -1.5)">
                  <path id="Path_4233" data-name="Path 4233"
                    d="M10.5,3h15A7.5,7.5,0,0,1,33,10.5v15A7.5,7.5,0,0,1,25.5,33h-15A7.5,7.5,0,0,1,3,25.5v-15A7.5,7.5,0,0,1,10.5,3Z"
                    fill="none" stroke="#fff"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path id="Path_4234" data-name="Path 4234" d="M24,17.055A6,6,0,1,1,18.945,12,6,6,0,0,1,24,17.055Z"
                    fill="none" stroke="#fff"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path id="Path_4235" data-name="Path 4235" d="M26.25,9.75h0" fill="none" stroke="#fff"
                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </svg>

            </a>
            <a href="https://www.facebook.com/amina.grp/" className="item">
              <svg className="svg-icon" id="Group_709" data-name="Group 709" width="36" height="36" viewBox="0 0 36 36">
                <path id="Path_4260" data-name="Path 4260" d="M0,0H36V36H0Z" fill="none" />
                <path id="Path_4261" data-name="Path 4261"
                  d="M15.4,19.94h3l1.2-6.24H15.4V10.58c0-1.607,0-3.12,2.4-3.12h1.8V2.218A26.088,26.088,0,0,0,16.172,2C12.914,2,10.6,4.585,10.6,9.332V13.7H7v6.24h3.6V33.2h4.8Z"
                  transform="translate(5.133 0.4)" fill="#fff" />
              </svg>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer