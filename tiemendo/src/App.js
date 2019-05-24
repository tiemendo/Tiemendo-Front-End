import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ClientList from "./Components/ClientList";
import ClientForm from "./Components/ClientForm";
import Register from "./Components/Register";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route path="/protected" component={ClientList} />
        <Route path="/client-form" component={ClientForm} />
        <Route exact path="/" component={Register} />
        <nav className="nav">
          <ul>
            <li className="list-el">
              <Link to="/client-form">Add Client</Link>
              <Link to="/protected">Clients</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
