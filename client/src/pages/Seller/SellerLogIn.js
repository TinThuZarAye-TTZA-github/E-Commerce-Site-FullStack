import { React, useState, useEffect } from 'react';
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap"

export const SellerLogIn = () => {

    const history = useHistory();
    const { id } = useParams();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [list, setList] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3001/sellersignup/login/${id}`).then((response) => {
             setList(response.data);
        })

    }, [])

    const login = () => {
        const data = {
            email: email,
            password: password,
        
        }

        axios.post("http://localhost:3001/sellersignup/login", data).then((response) => {
            if(response.data.error){
                alert(response.data.error);
            } 
              else {
                  
                console.log(list.id);
                sessionStorage.setItem("accessToken", response.data)
                history.push(`/sellerviewitem/${list.id}`) 
              }    
        }, [])
    }


    
   
    return (
        <div>
        <div className="inner-container"> 
            <h1>Seller Login</h1>
            <div className="form-group">
                <lable>Email</lable>
                <input
                    name="email"
                    placeholder="Enter Email"
                    onChange={(event) => {setEmail(event.target.value)}}
                    className="form-control"
                ></input>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    onChange={(event) => {setPassword(event.target.value)}}
                    className="form-control"
                ></input>
            </div>
        
            <div className="componemts">
                <button type="submit" onClick={login} onChange={(event) => {setList(event.target.value)}} className="btn btn-primary btn-block">Login</button>
            </div>

            
        </div>
            <Link to="/sellersignup">You don't have account? Register</Link>

        </div>
    )
}
