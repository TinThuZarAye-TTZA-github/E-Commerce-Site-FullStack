import React from 'react'
import { Button } from "react-bootstrap";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { SellerSignUp } from "./SellerSignUp";
import { Image, Carousel, Container  } from "react-bootstrap"


export const SellerHomePage = () => {


    const history = useHistory();
    return (
      
        <div style = {{
            width: "100%",
            height: "800px",
            backgroundImage: `url("/image/background.jpeg")`,
            backgroundSize: "cover"
        }}>

        <div>
        <Image src="/image/headphone.jpeg" roundedCircle 
            style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "30",
                borderTopRightRadius: "30",
                borderBottomLeftRadius: "30",
                borderBottomRightRadius: "30",
                position: "absolute",
                left: "10%",
                top: "20%"
            }}
        />
        </div>
        
        <div>
        <Image src="/image/chair.jpeg" roundedCircle 
            style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "30",
                borderTopRightRadius: "30",
                borderBottomLeftRadius: "30",
                borderBottomRightRadius: "30",
                position: "absolute",
                left: "30%",
                top: "10%"
            }}
        />
        </div>

        <div>
        <Image src="/image/table.jpeg" roundedCircle 
            style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "30",
                borderTopRightRadius: "30",
                borderBottomLeftRadius: "30",
                borderBottomRightRadius: "30",
                position: "absolute",
                left: "50%",
                top: "20%"
            }}    
        />
        </div>

        <div>
        <Image src="/image/keyboard.jpeg" roundedCircle 
            style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "30",
                borderTopRightRadius: "30",
                borderBottomLeftRadius: "30",
                borderBottomRightRadius: "30",
                position: "absolute",
                left: "70%",
                top: "10%"
            }}
        />

        </div>

        <div style={{
            width: "400px",
            height: "500px",

            position: "absolute",
            left: "70%",
            top: "50%"
        }}>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/headphone.jpeg"
            alt="First slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/chair.jpeg"
            alt="Second slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/table.jpeg"
            alt="Third slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/keyboard.jpeg"
            alt="Third slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/calculator.jpeg"
            alt="forth slide" 
            />
        </Carousel.Item>

    </Carousel>
        
        </div>

        <h1
            style={{position: "absolute", top: "50%", left: "2%", fontSize: "55px"}}
        >Want to Become a Seller?</h1>
        
        <div>
            <Link to="/sellersignup/login">
                <Button variant="outline-light" style={{color:"#2C3E50"}} className="top-right">Sign Up</Button>

                <Button variant="outline-secondary" className="center" style={{ background:"#eb9292", width: "20%"}}>Sign Up Here</Button>
                
            </Link>
        </div>

        </div>
    )
}


// <div style = {{
//     width: "100%",
//     height: "800px",
//     backgroundImage: `url("/image/pink.jpeg")`,
//     backgroundSize: "cover"
// }}>