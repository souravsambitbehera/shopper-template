import React from 'react'
import { useCookies } from "react-cookie";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopperHome = () => {
    const[cookies, setCookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies["UserId"]==undefined){
            navigate("/login")
        }
    })

    function HandelSignOutClick(){
        removeCookie("UserId");
        navigate("/login")
    }

  return (
    <div className='container-fluid d-flex justify-content-between' >
        <div>
            <div className='d-flex justify-content-between mt-5 p-3'>     
                <div>
                    <img src="elctronic.jpg" alt="" style={{height:"300px",width:"300px"}} />
                </div>
                <div>
                    <img src="jewelery.jpg" alt="" style={{height:"300px",width:"300px"}} />
                </div>
                <div>
                    <img src="women-clothing.jpg" alt="" style={{height:"300px",width:"300px"}} />
                </div>
                <div>
                    <img src="men''s-clothing.jpg" alt="" style={{height:"300px",width:"300px"}} />
                </div>
            </div>
        </div>

        <div>
            <h3>Hello ! {cookies["UserId"]}</h3>
            <button onClick={HandelSignOutClick} className='btn btn-link'>SignOut</button>
            
        </div>
    </div>
  )
}

export default ShopperHome