import {React, useState } from 'react'
import { Formik,Form, Field, ErrorMessage } from 'formik';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router';
import GoogleButton from "react-google-button";
import { Button } from "react-bootstrap"


export const UserSignUp = () => {

    const history = useHistory();
    const initialValue = {
        email: "",
        password: "",
        confirm_password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(4).max(10).required(),
        confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "password must match").required("confirm password is required"),
    })

    const onSbumit = (data) => {
        axios.post("http://localhost:3001/usersignup", data).then((response) => {
            if(response.data.error) {
                alert(response.data.error)
            } else {
                history.push('/usersignup/login');
            }
        })
    }

 

    const redirectToGoogle = async(data) => {
        const googleLoginURL = "http://localhost:3001/auth/google";

         const newWindow = window.open(googleLoginURL, "_blank", "width=1500, height=1500");
        
        history.push("/")
         
    }



    return (
        <div>
        <div className="inner-container">
            <Formik initialValues={initialValue} onSubmit={onSbumit} validationSchema={validationSchema}>
                
                <Form>
                    <h1>User Registratin Form</h1>
                    <div className="form-group">    
                        <label>Email</label>
                        <Field
                            name="email"
                            placeholder="Enter your email"
                            className="form-control"
                        ></Field>
                    <div>
                        <ErrorMessage name="email" component="span"></ErrorMessage>
                    </div>

                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <Field
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            className="form-control"
                        ></Field>
                    <div>
                        <ErrorMessage name="password" component="span"></ErrorMessage>
                    </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <Field
                            name="confirm_password"
                            placeholder="Enter confirm password"
                            type="password"
                            className="form-control"
                        ></Field>
                        <div>
                            <ErrorMessage name="confirm_password" component="span"></ErrorMessage>
                        </div>
                    </div>

                    <div className="componemts">
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                </Form>
                
            
            </Formik>

            <div style={{display:"flex", justifyContent:"center",  alignItems : "center"}}>
            <GoogleButton onClick={redirectToGoogle} >
    
            Login with Google</GoogleButton>
    
         </div>

        
        </div>

 

        </div>
        
    )
}


