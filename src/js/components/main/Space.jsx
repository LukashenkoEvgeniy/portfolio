import React from 'react';
import styled from 'styled-components';

import space from '../../../static/space.jpg'
import mercury from '../../../static/mercury.png'
import venus from '../../../static/venus.png'
import earth from '../../../static/earth.png'
import mars from '../../../static/mars.png'
import jupiter from '../../../static/jupiter.png'
import Planet from "./Planet";
import Satellite from "./Satellite";
import Stars from "./Stars";

export default class Space extends React.Component {

    constructor(props) {
        super(props);
    }

    scrollToNextPlanet(index) {
        window.scrollTo({
            top: document.documentElement.clientHeight * index,
            behavior: "smooth"
        });
    }

    render() {

        let planets = [
            {
                name: 'MERCURY',
                img: mercury,
                description: 'Fists planet'
            },
        ];
        return (
            <SpaceBackgrond>
                <Satellite/>
                <Planet
                    planet={planets[0]}/>
                <Planet
                    planet={planets[0]}/>
                <Planet
                    planet={planets[0]}/>
                <Planet
                    planet={planets[0]}/>
                <Planet
                    planet={planets[0]}/>
            </SpaceBackgrond>
        );
    }
}

const SpaceBackgrond = styled.div`
  background: url(${space}) fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   
`;
