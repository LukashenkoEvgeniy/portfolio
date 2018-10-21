import React from 'react';
import styled from 'styled-components';

import earth from '../../../static/earth.png'
import mars from '../../../static/mars.png'
import space from '../../../static/space.jpg'

export default class HomePage extends React.Component {

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

    render() {
        return (
            <SpaceBackgrond>

                <Earth ref={(ref) => this.ground = ref}
                       src={mars}
                       offset={this.state.groundOffset}
                />
            </SpaceBackgrond>
        );
    }
}

const SpaceBackgrond = styled.div`
  width: 100%;
  height: 100%;
   background-image: url(${space});
   background-repeat: repeat;
`;

const Earth = styled.img`
  ${props => `top: ${250 - props.offset}px;`};
  width: 370px;
  left: calc(50% - 185px);
  background-image: url( ${props => props.img});
  position: absolute;
  
`;