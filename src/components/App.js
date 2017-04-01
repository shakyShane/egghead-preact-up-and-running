import { h } from 'preact';
import User from './User';

const users = [
  {
    image: 'https://avatars0.githubusercontent.com/u/1643522?v=3',
    name: 'Shane Osbourne'
  },
  {
    image: 'https://avatars2.githubusercontent.com/u/170270?v=3',
    name: 'Sindre Sorhus'
  }
]

export function App() {
  return (
    <div class="app">
      {users.map(user =>
          <User image={user.image} name={user.name} key={user.name}/>
      )}
    </div>
  );
}

export default App;