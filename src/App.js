import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Movies from './Movies'
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/movies">Movies</Link>
                  </li>
                </ul>
              </nav>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/movies">
                  <Movies />
                </Route>
                <Route exact path="/">
                  <Register />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        );
    }
            
}

 
export default App;