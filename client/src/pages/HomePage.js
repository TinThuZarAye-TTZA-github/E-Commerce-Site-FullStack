import React from 'react';
import { Link } from "react-router-dom"
import { Button, Image, Carousel, Fade } from "react-bootstrap"
import { fadeIn } from 'react-animations';
import styled, { keyframes } from "styled-components";

const FadeIn = styled.div`animation: 2s ${keyframes `${fadeIn}`} infinite`;

export const HomePage = () => {
    return (
       <div style = {{
            width: "100%",
            height: "800px",
            backgroundImage: `url("/image/background.jpeg")`,
            backgroundSize: "cover"
        }}>


        <div>
        <Image src="/image/beatheadphone.jpeg" roundedCircle 
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
        <Image src="/image/chair1.jpeg" roundedCircle 
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
        <Image src="/image/computer.jpeg" roundedCircle 
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

        <div>
        <Image src="/image/laptop.jpeg" roundedCircle 
            style={{
                width: "200px",
                height: "200px",
                borderTopLeftRadius: "30",
                borderTopRightRadius: "30",
                borderBottomLeftRadius: "30",
                borderBottomRightRadius: "30",
                position: "absolute",
                left: "80%",
                top: "40%"
            }}
        />

        </div>

        <div style={{
            width: "300px",
            height: "300px",

            position: "absolute",
            left: "70%",
            top: "70%"
        }}>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/beatheadphone.jpeg"
            alt="First slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/airpod.jpeg"
            alt="Second slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/airpod1.jpeg"
            alt="Third slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/airpod2.jpeg"
            alt="Third slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/headphone2.jpeg"
            alt="forth slide" 
            />
        </Carousel.Item>

    </Carousel>
        
        </div>

        <div style={{
            width: "200px",
            height: "300px",

            position: "absolute",
            left: "40%",
            top: "70%"
        }}>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/chair1.jpeg"
            alt="First slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/table.jpeg"
            alt="Second slide" 
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
            src="/image/notebook.jpeg"
            alt="Third slide" 
            />
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/image/table2.jpeg"
            alt="forth slide" 
            />
        </Carousel.Item>

    </Carousel>
        
        </div>
        <h1
        style={{position: "absolute", top: "50%", left: "2%", fontSize: "55px"}}
        >User Need to Sign Up First!!</h1>

      
            <Link to="/usersignup/login">
            <Button variant="outline-light" style={{color:"#2C3E50"}} className="top-right">Sign Up</Button>
            
            <Button variant="outline-secondary" className="center" style={{ background:"#eb9292", width: "20%"}}>Sign Up Here</Button>

            </Link>
        </div>
    )
}
