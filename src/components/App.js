import { h, Component } from 'preact';

export class App extends Component {
  render(props, { text = '' }) {
    return (
      <div>
        <input type="text" value={text} onInput={this.linkState('text')}/>
        <pre><code>{JSON.stringify(this.state, null, 2)}</code></pre>
      </div>
    )
  }
}

export default App;