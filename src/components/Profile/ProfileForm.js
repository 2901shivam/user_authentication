import { useContext, useRef, useState } from 'react';
import classes from './ProfileForm.module.css';
import { myAuthentication } from '../Store/AuthenticationContex';

const ProfileForm = () => {
 //const passwordChange= useRef("");
 const[password,setPassword]=useState()
 const{token}=useContext(myAuthentication)

 const newPassword=(event)=>{
    setPassword(event.target.value);
 }

 const submitHandler=(event)=>{

  event.preventDefault();

//  const newPassword=()=>{

//  }

  //const newPassword=passwordChange.current.value;
 
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCqe2Wb5bDsrPZGLNn0g9FhQb_izE7Pvc4',{
    method:'POST',
    body:JSON.stringify({
      idToken:token,
      password:password,
      returnSecureToken:false,


    }),
    header:{'Content-Type':'application/json'}
  }).then(response=>{

  });

 }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' onChange={newPassword} value={password}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
