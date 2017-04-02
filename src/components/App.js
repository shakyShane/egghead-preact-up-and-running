import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from './Home';
import Profile from './Profile';
import Error from './Error';

export class App extends Component {
  render() {
    return (
      <div class="app">
        <Router>
          <Home path="/" />
          <Profile path="/profile/:user" />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;