import { h, Component } from 'preact';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Error from './Error';

export class App extends Component {
  render() {
    return (
      <div class="app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile/:user" component={Profile} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;