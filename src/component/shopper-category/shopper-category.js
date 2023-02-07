import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';
const ShopperCategory = () => {
    const[products,setProducts] = useState([])
    const params = useParams()
    const[cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();
    useEffect( () =>
        
        {
            if(cookies["UserId"]==undefined){
                navigate("/login")
            }

            axios.get(`https://fakestoreapi.com/products/category/${params.catname}`)
            .then(response =>
                setProducts(response.data))
        },[params.catname]
        )


  return (
    <div className='container-fluid'>
            <h2 className='mt-2'>
                Shopper Category {params.catname}
            </h2>
        <div className='d-flex flex-wrap gap-5' >
            {
            products.map(product =>
            <div key={product.image} className='card m-2 p-2'  style={{width:"300px"}} >
                <img  src={product.image} alt="" height="300" className='card-img-top' />
                <div className='card-header' style={{height:"150px"}} >
                    <p key={product.title}>
                        {product.title}
                        </p>
                </div>
                <div className='card-footer'>
                    <Link to={`/details/${product.id}`} className='btn btn-primary w-100'>Details</Link>

                </div>
            </div> )
            }
        </div>
            

    </div>
  )
}

export default ShopperCategory