import '@/styles/main.css'
import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next';
import UserProvider from '../../context/user';
import { SidebarProvider } from "../../context/SidebarContext";

// export default appWithTranslation(function App({ Component, pageProps }) {
//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
//   return (
//     <UserProvider>
//       <Component {...pageProps} />
//     </UserProvider>
//   );
// }


// ) 
  

function App({Component, pageProps }){
  useEffect(() => {
         require("bootstrap/dist/js/bootstrap.bundle.min.js");
       }, []);
  return  <UserProvider> <SidebarProvider><Component {...pageProps} /></SidebarProvider></UserProvider>
}

export default appWithTranslation(App)