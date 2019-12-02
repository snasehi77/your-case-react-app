import React, {useEffect} from 'react';
import Routes from './Routes'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {login} from "./Network";

const App = () => {

  useEffect(() => {
    login({username: 'hans@allcode.com', password: 'wpwd'});
  }, []);

  return (
    <Router>
      <Switch>
        {Routes.map(r => (
          <Route exact key={r.id} path={r.path}>
            {r.component}
          </Route>)
        )}
      </Switch>
    </Router>
  )
};

export default App;
