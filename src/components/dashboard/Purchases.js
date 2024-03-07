import NextImage from "../Image"
import Link from "next/link"
import { fromImageToUrl } from "@/utils/api"
const Purchases = ({ purchases }) => {
  return (
    <>
    <table className="table">
      <thead>
        <tr>
          <th>item</th>
          <th>status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {purchases.data.map((purchase) => (
        <tr
          key={purchase.id}

        >
           
           
          
              <td>{purchase.attributes.item}  </td>
              <td>{purchase.attributes.status}</td>
              <td>{purchase.attributes.total}</td>
              {/* <td>  {purchase.attributes.users_permissions_user.data.attributes.username} </td> */}
            
            
         
         

        </tr>
          
      ))}
     </tbody>
      </table>
    </>
  )
}

export default Purchases
