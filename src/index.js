import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthenticationContex } from './components/Store/AuthenticationContex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthenticationContex>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthenticationContex>
);

