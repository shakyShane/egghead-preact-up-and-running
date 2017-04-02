import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from './reducer';
import App from './components/App';

const initialState = {
  loading: true,
  user: null
};

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

render((
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
), document.querySelector('main'));