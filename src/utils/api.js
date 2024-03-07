import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL
});
const linstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

export default instance;
export { linstance };




export function getStrapiURL(path) {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
    }${path}`;
  }
  
/**
 * 
 * @param {any} image 
 */
export const fromImageToUrl =(image) =>{
    const requestUrl = "http://localhost:1337";
    if(!image){
        return "/default.png" // default image
    }
    if (image.indexOf('/') ===0){
        return `${requestUrl}${image}`
    }
    return image.url
}


  // Helper to make GET requests to Strapi
  export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
  
  export async function fetcher(url, options = {}) {
    let response;
    if (!options) {
      response = await fetch(url);
    } else {
      response = await fetch(url, options);
    }
    const data = await response.json();
    return data;
  }
  // export async function getTiers() {
  //   const tiers = await fetchAPI("/tiers?populate=*");
  //   console.log(tiers);
 
  //   return tiers;
  // }
  
 