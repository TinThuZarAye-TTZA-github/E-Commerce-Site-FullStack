

// import { React, useState, useEffect } from "react";
// import { Link, useParams} from "react-router-dom";
// import axios from "axios";
// import "../css/SellerView.css"


// export const SellerView = () => {

//     const [listAll, setListAll] = useState([]);
//     let { id } = useParams();
 
//     useEffect(() => {
//         axios.get("http://localhost:3001/additem").then((response) => {
//             setListAll(response.data);
//         });

    
//     });

//     return (

//         <div> {id} 
//             <h1>Seller View</h1>
//             <Link to="/additem">Click here to Add Item</Link>
//             {listAll.map((value,key) => {
//                 return (
//                     <div className="item">
//                         <div className="item-name">{value.item_name}</div>

//                         <div className="info">
//                         <label>price   :  </label>
//                             {value.price}
//                         </div>
//                         <div className="info">
//                             <label>Seller Name   :   </label>
//                             {value.seller_name}
//                         </div>
//                         <div className="info">
//                             <label>Seller Address   :   </label>
//                             {value.seller_address}
//                         </div>
//                     </div>
//                 );
//             })}
            
//         </div>
//     )
// }
