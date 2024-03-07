import NextImage from "./Image"
import Link from "next/link"
import React, { useState } from "react";
import { fromImageToUrl } from "@/utils/api"
import ReadMore from "./ReadMore";
const FandBList = ({ foodAndBs }) => {
  const [showAll, setShowAll] = useState(false);
  const limit=150;
  return (
    <>
      {foodAndBs.data.map((fb) => (
        <div className="col-md-4 col-lg-4 col-xs-12 col-sm-12   rounded-lg bg-gray-100 "
          key={fb.id}

        >
          <div className="primary-service "  >

            {fb.attributes.image.data !== null ? <img className="img" src={fromImageToUrl(fb.attributes.image.data.attributes.formats.thumbnail.url)} width='100%' />
              : console.log('no image to display')}
            <div className="content">
              <h5 className="title">{fb.attributes.title}  </h5>
              <div className="body">  <ReadMore text={fb.attributes.description}/>
                <span className="phone">{fb.attributes.phone}</span>
              </div>
              
            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default FandBList
