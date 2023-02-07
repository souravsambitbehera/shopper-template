import React from 'react'
import { Link } from 'react-router-dom'

const ShopperInvalid = () => {
  return (
    <div className='text-danger'>
        <h3>Invalid UserName And Password</h3>
        <div>
            <Link to="/login" className='btn btn-primary'>Again Login</Link>
        </div>

    </div>
  )
}

export default ShopperInvalid