import React from 'react';
import {hot} from 'react-hot-loader'
import styled, {createGlobalStyle} from 'styled-components';

import Navigation from "./components/navigation/Navigation";
import Space from "./components/main/Space";


function App() {
    return (
        <>
            {/*<Navigation/>*/}
            <Space/>
            <GlobalStyles/>
        </>
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
