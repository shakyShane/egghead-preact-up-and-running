import { h, Component } from 'preact';
import User from './User';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      loading: true
    }
  }
  componentDidMount() {
    fetch(this.props.config.urls.user)
        .then(resp => resp.json())
        .then(user => {
          this.setState({
            user,
            loading: false
          });
        })
        .catch(err => console.error(err));
  }
  render({config}, {loading, user}) {
    return (
      <div class="app">
        {loading
          ? <p>Fetching {config.urls.user}</p>
          : <User image={user.avatar_url}
                  name={user.name} />
        }
      </div>
    );
  }
}

export default App;