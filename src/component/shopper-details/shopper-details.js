import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const ShopperDetails = () => {
    const[product,setProduct] = useState({id:0,title:"",price:0,rating:{rate:0,count:0}});
    const params = useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response =>{
            setProduct(response.data)
        })
    },[])
    
  return (
    <>
        <div className='row'>
            <div className='col-3'>
                <img src={product.image} alt="" width="200" height="200" />
            </div>
            <div className='col-9'>
                <dl>
                    <dt>Title</dt>
                    <dd>{product.title}</dd>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Rating</dt>
                    <dd><span className='bi bi-star-fill text-success'></span>{product.rating.rate}[{product.rating.count}]</dd>
                </dl>
            </div>
        </div>
        <div> 
        <Link to={`/category/${product.category}`} className='btn btn-primary'>Go back to {product.category}</Link>

        </div>
    </>
  )
}

export default ShopperDetails