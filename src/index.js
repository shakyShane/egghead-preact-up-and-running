import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer';
import App from './components/App';

const store = createStore(reducer, {
  loading: true,
  user: null
}, applyMiddleware(thunk));

render((
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
), document.querySelector('main'));