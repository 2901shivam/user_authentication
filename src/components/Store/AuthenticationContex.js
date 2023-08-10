import React, { createContext, useState } from 'react'

const myAuthentication=React.createContext({
   token:'',
   isLogedin:false,
   login:(token)=>{},
   logout:()=>{},
   

})

const AuthenticationContex = (props) => {
    const[token,setToken]=useState(null);

    const userIsLogedin=!!token;

    const loginHandler=(token)=>{
        setToken(token);

    }

    const logoutHandler=()=>{
    setToken(null);
    }

    const contextValue={
        token:token,
        isLogedin:userIsLogedin,
        login:loginHandler,
        logout:logoutHandler,
 }
  return (
    <myAuthentication.Provider value={contextValue}>
      {props.children}
    </myAuthentication.Provider>
  )
}

export default AuthenticationContex
