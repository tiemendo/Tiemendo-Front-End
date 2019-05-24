import React from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import ClientList from './Components/ClientList';
import ClientForm from './Components/ClientForm';
import Register from './Components/Register';

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
      <PrivateRoute exact path='/protected' component={ClientList} />
      <PrivateRoute exact path='/client-form' component={ClientForm} />
      <PrivateRoute exact path='/register' component={Register} />
      
    </div>
    </Router>
    
  );
}

export default App;
