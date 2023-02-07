import { Formik,Form,ErrorMessage,useFormik,Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const ShopperLogin = () => {
    const navigate = useNavigate();
    const[cookies, setCookie, removeCookie] = useCookies();
  return (
    <div>
        <Formik
        initialValues={{
            UserId:"",
            Password:""
        }}

        onSubmit = {
            (values)=>{
                axios({
                    method:"get",
                    url:"http://127.0.0.1:5000/users"
                })
                .then((response)=>{
                    for(var user of response.data){
                        if(user.UserId==values.UserId && user.Password==values.Password){
                            setCookie("UserId", values.UserId);
                            navigate("/home");
                            break;
                        }else{
                            navigate("/invalid");
                        }
                    }
                })
            }
        }
        >
            <Form>
                <dl>
                    <dt>UserId</dt>
                    <dd><Field name="UserId" type="text" /></dd>
                    <dt>Password</dt>
                    <dd><Field name="Password" type="text" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>

                <div>
                <Link to="/register" className='btn btn-primary mt-3'>New User? Register</Link>

                </div>
            </Form>

        </Formik>
    </div>
  )
}

export default ShopperLogin