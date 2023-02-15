import React, { useReducer } from 'react'

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
    const [state,dispatch] = useReducer(reducer,initialState);
    function HandleJoinClick(){
        dispatch({type:"join"})
    }
    function HandleExitClick(){
        dispatch({type:"exit"})
    }
  return (
    <div>
        <h2>Youtube live watching</h2>
        <h4>{state.count} watching</h4>
        <button onClick={HandleJoinClick} className='btn'>join</button>
        <button onClick={HandleExitClick} className='btn'>Exit</button>
    </div>
  )
}

export default UseReducerDemo