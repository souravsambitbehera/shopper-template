import { Formik,Form,ErrorMessage,useFormik,Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import React from 'react'
import { useNavigate } from "react-router-dom";

const ShopperRegister = () => {
    const navigate = useNavigate();
  return (
        <div className="container-fluid">
            <Formik
            initialValues={{
                UserId:"",
                UserName :"",
                Password:"",
                Email:"",
                Age:0,
                Mobile:""
            }}
            validationSchema ={
                yup.object({
                    UserId : yup.string().required("UserId Required"),
                    UserName :yup.string().required("UserName Required"),
                    Password: yup.string().required("Password Required").matches(/(?=.*[A-Z])\w{4,15}/,"Password 4 t0 15 chars with atleast one UpperCase"),
                    Email: yup.string().required("Email Required").email("Invalid Mail"),
                    Age : yup.number().required("Age Required"),
                    Mobile : yup.string().required("Mobile Required").matches(/\+91\d{10}/,"Invalid mobile +91 and 10 digits")
                })
            }
            onSubmit = {
                (values)=>{
                    axios({
                        method:"post",
                        url:"http://127.0.0.1:5000/registeruser",
                        data:values
                    }).then(()=>{
                        alert("register succesfully");
                        navigate("/login")
                    })
                }
            }
            >
                {       
                    <Form>
                        <dl>
                            <dt>UserId</dt>
                            <dd><Field name="UserId" type="text" /></dd>
                            <dd><ErrorMessage name="UserId" /></dd>

                            <dt>UserName</dt>
                            <dd><Field name="UserName" type="text" /></dd>
                            <dd><ErrorMessage name="UserName" /></dd>

                            <dt>Password</dt>
                            <dd><Field name="Password" type="text" /></dd>
                            <dd><ErrorMessage name="Password" /></dd>

                            <dt>Email</dt>
                            <dd><Field name="Email" type="email" /></dd>
                            <dd><ErrorMessage name="Email" /></dd>

                            <dt>Age</dt>
                            <dd><Field name="Age" type="number" /></dd>
                            <dd><ErrorMessage name="Age" /></dd>

                            <dt>Mobile</dt>
                            <dd><Field name="Mobile" type="text" /></dd>
                            <dd><ErrorMessage name="Mobile" /></dd>
                        </dl>
                        <button className="btn btn-primary">Register</button>
                        <div>
                            <Link to="/login" className='btn btn-primary mt-3'>Already a user?</Link>
                        </div>
 
                    </Form>
                }

            </Formik>
        </div>
  )
}

export default ShopperRegister