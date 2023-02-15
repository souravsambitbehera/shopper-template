import React, { useContext } from 'react'

let contextName = React.createContext('');

const UseContextDemoChild = () =>{
    const ref = useContext(contextName);
    return(
        <h2>hello {ref}</h2>
    )
}

const UseContextDemo = ()=>{
    const ref = useContext(contextName);
    return (
        <>
        <h2>{ref}</h2>
        <UseContextDemoChild/>
        </>
    )

} 

const UseContext = () => {
  return (

    <div>UseContext
    <contextName.Provider value="sourav">
        <UseContextDemo/>
        </contextName.Provider>
    </div>
  )
}

export default UseContext