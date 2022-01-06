import React from 'react';
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const SellerSignUp = () => {

    const history = useHistory();
  

    const initialValue = {
        email: "",
        password: "",
        confirm_password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(4).max(10).required(),
        confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "password and confirm password have to match ").required("confirm password required"),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/sellersignup", data).then((response) => {
            if(response.data.error) {
                alert(response.data.error);
            }else {
                history.push("/sellersignup/login");
            }
        })
    }
    return (
        <div className="inner-container"> 
            <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                <h1>Seller Sign up</h1>
                <div className="form-group">
                    <label>Email</label>
                    <Field
                        name="email"
                        placeholder="Enter email"
                        className="form-control"
                    ></Field>
                </div>

                <div>
                    <ErrorMessage name="email" component="span"></ErrorMessage>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Field
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        className="form-control"
                    ></Field>   
                </div>

                <div>
                    <ErrorMessage name="password" component="span"></ErrorMessage>
                </div>

                <div className="form-group">
                    <label>Confirm password</label>
                    <Field
                        name="confirm_password"
                        placeholder="Enter confirm passwrod"
                        type="password"
                        className="form-control"
                    ></Field>
                </div>

                <div>
                    <ErrorMessage name="confirm_password" component="span"></ErrorMessage>
                </div>

                <div className="componemts">
                    <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                </div>

                </Form>
            </Formik>
        </div>
    )
}


