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
        return (
            <SpaceBackgrond>
                <Stars/>
                <Planet
                    name={'SUN'}
                    onClick={() => this.scrollToNextPlanet(1)}
                    planetImg={sun}
                />
                <Planet
                    name={'MERCURY'}
                    onClick={() => this.scrollToNextPlanet(2)}
                    planetImg={mercury}
                />
                <Planet
                    name={'VENUS'}
                    onClick={() => this.scrollToNextPlanet(3)}
                    planetImg={venus}
                />
                <Planet
                    name={'EARTH'}
                    onClick={() => this.scrollToNextPlanet(4)}
                    planetImg={earth}
                />
                <Planet
                    name={'MARS'}
                    onClick={() => this.scrollToNextPlanet(5)}
                    planetImg={mars}/>
                <Planet
                    name={'JUPITER'}
                    onClick={() => this.scrollToNextPlanet(6)}
                    planetImg={jupiter}
                />
                <Planet
                    name={'SATURN'}
                    onClick={() => this.scrollToNextPlanet(7)}
                    planetImg={saturn}
                />
                <Planet
                    name={'URANUS'}
                    onClick={() => this.scrollToNextPlanet(9)}
                    planetImg={uranus}
                />
                <Planet
                    name={'NEPTUNE'}
                    onClick={() => this.scrollToNextPlanet(8) }
                    planetImg={neptune}
                />
                <Planet
                    name={'PLUTON'}
                    onClick={() => this.scrollToNextPlanet(1)}
                    planetImg={pluton}
                />
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
