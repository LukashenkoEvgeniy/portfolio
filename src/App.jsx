import React from 'react';
import {hot} from 'react-hot-loader'
import {createGlobalStyle} from 'styled-components';

import {createStore} from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux'


import Space from "./components/main/Space";


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <Provider store={store}>
            <>
                <Space/>
                <GlobalStyles/>
            </>
        </Provider>
    );
}

const GlobalStyles = createGlobalStyle`
  body, html {
   margin: 0;
    height: 100%;
    width: 100%
  }
  #main {
    height: 100%
    width: 100%
  }
`;

export default hot(module)(App)
