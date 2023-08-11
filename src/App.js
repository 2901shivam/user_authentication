import {  Route,Routes} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { useContext } from 'react';
import { myAuthentication } from './components/Store/AuthenticationContex';

function App() {
  const{userIsLogedin}=useContext(myAuthentication);
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<HomePage/>}/>
         
        <Route path='/auth' element={<AuthPage/>}/>
         
        {userIsLogedin&&<Route path='/profile' element={<UserProfile/>}/>}
          
      </Routes>
    </Layout>
  );
}

export default App;
