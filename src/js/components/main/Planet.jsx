import React from 'react';
import styled from 'styled-components';

export default class Planet extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <PlanetWrapper onClick={this.props.onClick}>
                <PlanetImage
                    ref={(ref) => this.ground = ref}
                    src={this.props.planetImg}
                />
            </PlanetWrapper>
        );
    }
}

const PlanetWrapper = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlanetImage = styled.img`
   width: 50%;
   @media (max-width: 700px) {
    width: 90%;
  }
  background-image: url( ${props => props.img});
`;