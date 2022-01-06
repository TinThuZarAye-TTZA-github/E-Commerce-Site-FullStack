import { React, useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button } from "react-bootstrap"

export const UserLogIn = () => {
    
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

    const login = () => {
        const data = {
            email:email,
            password:password
        }
        axios.post("http://localhost:3001/usersignup/login", data,).then((response)=>{
            if(response.data.error) {
                alert(response.data.error)
            } else {
                sessionStorage.setItem("accessToken", response.data)
                history.push('/userhomepage')
            }
            
        },[])
    }

    return (
        
        <div>
        <div className="inner-container">
       
            <h1>User Log In Form</h1>
            <div className="form-group">
                <label>Email</label>
                <input
                    name="email"
                    placeholder="Enter your Email"
                    onChange={(event) => {setEmail(event.target.value)}}
                    className="form-control"
                ></input>
            </div>
            
            <div className="form-group">
                <label>Password</label>
                <input
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(event) => {setPassword(event.target.value)}}
                    className="form-control"
                ></input>
            </div>
            <div className="componemts">
                <button type="submit" onClick={login} className="btn btn-primary btn-block">Log In</button>
            </div>

            
        </div>

        <Link to="/usersignup">You don't have account? Register</Link>


        </div>
        
    )
}
