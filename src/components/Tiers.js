import NextImage from "./Image"
import Link from "next/link"
import { fromImageToUrl } from "@/utils/api"
const Tiers = ({ tiers }) => {
  return (
    <>
      {tiers.data.map((tier) => (
        <div className="col-md-3 col-lg-3 col-xs-12 col-sm-12   rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
          key={tier.id}

        >
          <div className="card"  >
            {/* <NextImage width={350} height={350}  src={tier.attributes.image.data.attributes.formats.large.url}  /> */}
            <img className="card_img" src={fromImageToUrl(tier.attributes.image.data.attributes.formats.small.url)} width='100%' />
            <div className="card_content">
              <h5 className="card_title">{tier.attributes.title}  </h5>
              <p className="card_body">{tier.attributes.description}</p>
             
            </div>
          </div>

        </div>
      ))}
    </>
  )
}

export default Tiers
