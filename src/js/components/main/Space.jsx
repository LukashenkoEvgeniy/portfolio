import React from 'react';
import styled from 'styled-components';

import space from '../../../static/space.jpg'
import mercury from '../../../static/mercury.png'
import venus from '../../../static/venus.png'
import earth from '../../../static/earth.png'
import mars from '../../../static/mars.png'
import jupiter from '../../../static/jupiter.png'
import saturn from '../../../static/saturn.png'
import neptune from '../../../static/neptune.png'
import pluton from '../../../static/pluton.png'
import uranus from '../../../static/uranus.png'
import sun from '../../../static/sun.png'
import Planet from "./Planet";
import Satellite from "./Satellite";
import Stars from "./Stars";

export default class Space extends React.Component {

    constructor(props) {
        super(props);
        this.state = {groundOffset: 0};
        this.scrollListener = this.scrollListener.bind(this)
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollListener)
    }

    scrollListener() {
        // this.setState({groundOffset: window.pageYOffset});
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
                name: 'SUN',
                img: sun,
                description: 'Fists planet'
            },{
                name: 'MERCURY',
                img: mercury,
                description: 'Fists planet'
            },{
                name: 'VENUS',
                img: venus,
                description: 'Fists planet'
            },{
                name: 'EARTH',
                img: earth,
                description: 'Fists planet'
            },{
                name: 'MARS',
                img: mars,
                description: 'Fists planet'
            },{
                name: 'EARTH',
                img: earth,
                description: 'Fists planet'
            },{
                name: 'JUPITER',
                img: jupiter,
                description: 'Fists planet'
            },{
                name: 'SATURN',
                img: saturn,
                description: 'Fists planet'
            },{
                name: 'URANUS',
                img: uranus,
                description: 'Fists planet'
            },{
                name: 'NEPTUNE',
                img: neptune,
                description: 'Fists planet'
            },{
                name: 'PLUTON',
                img: pluton,
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
