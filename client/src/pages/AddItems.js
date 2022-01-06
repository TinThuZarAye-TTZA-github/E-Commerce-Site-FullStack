import { React } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AddItems = () => {

    const history = useHistory();


    const initialValues = {
        item_name: "",
        price: "" ,
        seller_name: "",
        seller_address: "",

    }


    const validationSchema = Yup.object().shape({
        item_name: Yup.string().required(),
        price: Yup.number().required(),
        seller_name: Yup.string().required(),
        seller_address: Yup.string().required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/additem", data).then((response) => {
            if(response.data.ErrorMessage) {
                alert(response.data.ErrorMessage);
            } else {
                history.push("/sellerview");
            }
        })
    }



    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form>
                    <h1>Add Items</h1>
                    <div>
                        <label>Item Name</label>
                        <Field
                            name="item_name"
                            placeholder="Enter the item name"
                        ></Field>
                        <ErrorMessage name="item_name" component="span"></ErrorMessage>
                    </div>

                    <div>
                        <label>Price</label>
                        <Field
                            name="price"
                            placeholder="Enter the item price in $ : "
                        ></Field>
                        <ErrorMessage name="price" component="span"></ErrorMessage>
                    </div>

                    <div>
                        <label>Seller's Name</label>
                        <Field
                            name="seller_name"
                            placeholder="Enter the seller's name"
                        ></Field>
                        <ErrorMessage name="seller_name" component="span"></ErrorMessage>
                    </div>

                    <div>
                        <label>Seller's Information</label>
                        <Field
                            name="seller_address"
                            placeholder="Enter seller's address"
                        ></Field>
                        <ErrorMessage name="seller_address" component="span"></ErrorMessage>
                    </div>

                    <div>
                        <button type="submit">Add Item</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
