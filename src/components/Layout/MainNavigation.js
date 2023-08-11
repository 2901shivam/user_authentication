import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import  { myAuthentication } from '../Store/AuthenticationContex';


const MainNavigation = () => {
  // const crtctx=useContext(myAuthentication)

  // const auth=crtctx.userIsLogedin;

  const{userIsLogedin,logoutHandler}=useContext(myAuthentication);

  const logoutHandle=()=>{
   // console.log('jj')
    logoutHandler();

  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
          {!userIsLogedin&& <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {userIsLogedin&&<Link to='/profile'>Profile</Link>}
          </li>
          <li>
           {userIsLogedin&& <button onClick={logoutHandle}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
