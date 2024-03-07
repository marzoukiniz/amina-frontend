import NextImage from "./Image"
import Link from "next/link"
import React, { useState } from "react";
import { fromImageToUrl } from "@/utils/api"
import ReadMore from "./ReadMore";
const ServicesList = ({ services }) => {
  const [showAll, setShowAll] = useState(false);
  const limit=150;
  return (
    <>
      {services.data.map((service) => (
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12   rounded-lg bg-gray-100 "
          key={service.id}

        >
          <div className="primary-service "  >

            {service.attributes.image.data !== null ? <img className="img" src={fromImageToUrl(service.attributes.image.data.attributes.formats.thumbnail.url)} width='100%' />
              : console.log('no image to display')}
            <div className="content">
              <h5 className="title">{service.attributes.title}  </h5>
              <div className="body">  <ReadMore text={service.attributes.long_description}/>
                <span className="phone">{service.attributes.phone}</span>
              </div>
              
            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default ServicesList
