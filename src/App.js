import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Notes from './containers/Notes';
import Login from './containers/Login';

function App() {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="app-root">
            {!!accessToken &&
              <Route path="/" exact component={Notes} />
            }
            {!accessToken &&
              <Route path="/" exact component={Login} />
            }
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;