import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthenticationContex from '../Store/AuthenticationContex';

const MainNavigation = () => {
  const crtctx=useContext(myAuthentication)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
          {!isLogedin&& <Link to='/auth'>Login</Link>}
          </li>
          <li>
            {isLogedin &&<Link to='/profile'>Profile</Link>}
          </li>
          <li>
           {isLogedin&& <button>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
