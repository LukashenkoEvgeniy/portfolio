import React from 'react';
import {hot} from 'react-hot-loader'
import styled, {createGlobalStyle} from 'styled-components';

import Navigation from "./navigation/Navigation";
import LeftSideBar from "./sideBar/leftSideBar/LeftSideBar";
import HomePage from "./pages/home/HomePage";
import Deeper from "./pages/deeper/Deeper";


function App() {
    return (
        <>
            <Navigation/>
            <LeftSideBar/>
            <HomePage/>
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
