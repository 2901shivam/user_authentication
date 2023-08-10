import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import  { myAuthentication } from '../Store/AuthenticationContex';


const MainNavigation = () => {
  const crtctx=useContext(myAuthentication)

  const auth=crtctx.userIsLogedin;
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
          {!auth&& <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {auth&&<Link to='/profile'>Profile</Link>}
          </li>
          <li>
           {auth&& <button>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
