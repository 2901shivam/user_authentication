import React, { createContext, useState } from "react";

const myAuthentication = createContext();

const AuthenticationContex = (props) => {
  const [token, setToken] = useState(null);

  let userIsLogedin = false;

  if (token) {
    userIsLogedin = true;
  }

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  return (
    <myAuthentication.Provider
      value={{ token, userIsLogedin, loginHandler, logoutHandler }}
    >
      {props.children}
    </myAuthentication.Provider>
  );
};

export { AuthenticationContex, myAuthentication };
