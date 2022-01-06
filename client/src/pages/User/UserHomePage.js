import { React, useState, useEffect } from 'react'
import axios from "axios"
import { useHistory, Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap"

const PAGE_PRODUCT = "products";
const PAGE_CART = "cart";

export const UserHomePage = () => {

    const [list, setlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(PAGE_PRODUCT );

 
    let history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:3001/additem").then((response) => {
            setlist(response.data);
        }, 
        // {
        //     headers: {
        //         accessToken : sessionStorage.getItem("accessToken"),
        //     }
        // }
        );

    
    },[]);

    const addToCart = (list) => {
        console.log("hello")
        setCart([...cart, {...list}])
        console.log(list)

    }


    const navigateTo = (nextPage) => {
        setPage(nextPage)
    }


    const removeProduct = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove))

    };

    const randerCart = () => (
        <div>
        {cart.map((val,key) => {
            return (
                <div>
                    <p>Item-Name : {val.item_name}<div></div>
                        Item-Price : {val.item_price}<div></div>
                        Seller_Name : {val.seller_name}<div></div>
                        Seller-Address : {val.seller_address}<div></div>
                    </p>

                    <button onClick={() => {removeProduct(val)}}>Remove</button>

                    <div>
                        
                    </div>
                </div>

              
            )
        })}
        
        </div>
    )
    return (
        <div>
        <h1>Welcome to the home page</h1>
        <Form.Group className="search-bar">
            <Form.Label><b>Search</b></Form.Label>
            <Form.Control type="text" placeholder="search" onChange={(event) => {setSearch(event.target.value)}}></Form.Control>
            
        </Form.Group>

        <Button variant="light" onClick={() => navigateTo(PAGE_CART) } >
        <Link to="/cart">Go To Cart ({cart.length})</Link>
        </Button>




        {list.filter((value) => {
            if(search === ""){
                return value
            } else if(value.item_name.toLowerCase().includes(search.toLowerCase())){
                return value
            }
        }).map((value,key) =>{
            return (


                <div className="flex-container">
                <div className="flex-box">
                    
                        <p>
                        <b>{value.item_name}</b>
                        </p>

                        <p>       
                        <label>Item Price  :  </label>
                        ${value.item_price}
                        </p>

                        <p>
                        <label>Seller's Name  :  </label>
                        {value.seller_name}
                        </p>

                        <p>
                        <label>Seller's Address  :  </label>
                        {value.seller_address}
                        </p>

                    <Button variant="info" onClick={() => addToCart(list)}>Add</Button>
                </div>

                </div>
                
            )
        })}

    

        </div>
    )
}


// <button onClick={() => navigateTo(PAGE_CART) }>Go To Cart ({cart.length})</button>
// <button onClick={() => {history.push("/userlogin")}}>Payment</button>
// <button onClick={() => {navigateTo(PAGE_PRODUCT)}}>View Product</button>
// {page === PAGE_PRODUCT  && renderProducts()}
// {page === PAGE_CART && randerCart()}



    