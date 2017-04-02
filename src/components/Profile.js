import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import User from './User';
import { fetchUser } from '../actions';

export class Profile extends Component {
  componentDidMount() {
    const username = this.props.match.params.user;
    this.props.fetchUser(username);
  }
  render({loading, user}) {
    return (
        <div class="app">
          {loading
              ? <p>Fetching...</p>
              : <User image={user.avatar_url}
                      name={user.name} />
          }
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);