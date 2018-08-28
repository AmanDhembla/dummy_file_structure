import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Landing from './Landing';
import Sidebar from './sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Sidebar />
            <Switch>
              <Route path="/" component={Landing} exact={true}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
