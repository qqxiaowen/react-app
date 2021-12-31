/*
 * @Author: xiaoWen
 * @Date: 2021-12-31 15:05:26
 * @LastEditors: xiaoWen
 * @LastEditTime: 2021-12-31 16:00:36
 */
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import home from './page/home/home';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/home" />
        <Route exact path="/home" component={home} />
      </Switch>
    </Router>
  );
}

export default App;
