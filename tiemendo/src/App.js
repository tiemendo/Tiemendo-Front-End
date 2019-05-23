import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Clients from './Components/Clients';
import ClientForm from './Components/ClientForm';
import Register from './Components/Register';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/client-form'>Add Client</Link>
            <Link to='/protected'>Clients</Link>
          </li>
        </ul>
      </nav>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/protected' component={Clients} />
      <PrivateRoute exact path='/client-form' component={ClientForm} />
      <PrivateRoute exact path='/register' component={Register} />
    </div>
    </Router>
    
  );
}

export default App;
