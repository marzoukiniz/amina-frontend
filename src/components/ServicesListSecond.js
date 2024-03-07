import NextImage from "./Image"
import Link from "next/link"
import { fromImageToUrl } from "@/utils/api"
import {BiSolidPhone} from 'react-icons/bi'
const ServicesListSecond = ({ services }) => {
  return (
    <>
      {services.data.map((service) => (
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12   rounded-lg bg-gray-100 "
          key={service.id}

        >
          <div className="secondary-service box-yes"  >
               <div className="content">
              <h5 className="title">{service.attributes.title}  </h5>
              <p className="desc">{service.attributes.short_description}
                <br />
                <span className="phone"> <BiSolidPhone size={20}/>{service.attributes.phone}</span>
              </p>

            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default ServicesListSecond
