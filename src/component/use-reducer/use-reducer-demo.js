import React, { useReducer } from 'react'
import useCaptcha from '../../custom-hooks/useCaptcha/usecaptcha';
import useChangeCase from '../../custom-hooks/useChangeCase/useChangeCase';
import useAscendingOrder from '../../custom-hooks/useAscendingOrder/useAscendingOrder';

const initialState = {count:0};
function reducer(state,action){
    switch(action.type){
        case "join":
            return {count:state.count+1};
        case "exit":
            return {count:state.count-1};
    }
}

const UseReducerDemo = () => {
    const captcha = useCaptcha();
    const msg = useChangeCase("hello Sourav");
    const sortedData = useAscendingOrder([5, 2, 8, 1, 9],"asc");

    const [state,dispatch] = useReducer(reducer,initialState);
    function HandleJoinClick(){
        dispatch({type:"join"})
    }
    function HandleExitClick(){
        dispatch({type:"exit"})
    }
  return (
    <div>
        <h2>Youtube live watching {msg}</h2>
        <h4>{state.count} watching</h4>
        <p>your captcha co</p>
        <p>{sortedData}</p>
        <button onClick={HandleJoinClick} className='btn'>join</button>
        <button onClick={HandleExitClick} className='btn'>Exit</button>
    </div>
  )
}

export default UseReducerDemo