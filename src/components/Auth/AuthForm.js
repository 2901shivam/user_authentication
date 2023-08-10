import { useContext, useRef, useState } from 'react';

import classes from './AuthForm.module.css';
import { json } from 'react-router-dom';
import AuthenticationContex from '../Store/AuthenticationContex';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailref=useRef();
  const passwordref=useRef();
  const crtctx=useContext(AuthenticationContex);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();

    const Enteredemail=emailref.current.value;
    const Enteredpassword=passwordref.current.value;

    if(isLogin){
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqe2Wb5bDsrPZGLNn0g9FhQb_izE7Pvc4',{
        method:'POST',
        body:JSON.stringify({
          email:Enteredemail,
          password:Enteredpassword,
          returnSecureToken:true

        }),
        headers:{
          'Content-Type':'Application/json'
        }
      }).then((response)=>{
        if(response.ok){

          return response.json().then(data=>{
            //console.log(data);
            crtctx.login(data.idToken);
          });
        }
        else{
          return response.json((data)=>{
            if(data&&data.error&&data.error.message){
              alert(data.error.message);
            }
          })
        }
      })

    }
    else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqe2Wb5bDsrPZGLNn0g9FhQb_izE7Pvc4',{
        method:'POST',
        body:JSON.stringify({
          email:Enteredemail,
          password:Enteredpassword,
          returnSecureToken:true,
        }),
        headers:{
          'Content-Type':'Application/json'
        },
      }).then((response)=>{
        if(response.ok){

        }
        else{
         return response.json().then(data=>{
          console.log(data);
           let errorMessage='Authantication Failed'
           if(data&&data.error&&data.error.message){
            errorMessage=data.error.message;
           }
           alert(errorMessage);
          })
        }
      })
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordref}
          />
        </div>
        <div
        className={classes.actions}><button>{isLogin?'Login':'Create Account'}</button></div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
