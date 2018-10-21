import React from 'react';
import styled from 'styled-components';

import sky from '../../../static/sky.png'
import ground from '../../../static/ground.png'

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
        this.setState({groundOffset: window.pageYOffset});
    }

    render() {
        return (
            <>
                <ImageSky ref={(ref) => this.sky = ref}
                          src={sky}/>
                <ImageGround ref={(ref) => this.ground = ref}
                             src={ground}
                             offset={this.state.groundOffset}
                />
            </>
        );
    }
}

const ImageSky = styled.img`
   
  width: 100%;
  position: absolute;
  top: 0;
`;

const ImageGround = styled.img`
  ${props => `top: ${250 - props.offset}px;`};
  width: 100%;
  background-image: url( ${props => props.img});
  position: absolute;
  
`;