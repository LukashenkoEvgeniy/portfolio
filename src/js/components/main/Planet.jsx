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
                <Name>{this.props.name}</Name>
                <PlanetImage
                    ref={(ref) => this.ground = ref}
                    src={this.props.planetImg}
                />
            </PlanetWrapper>
        );
    }
}

const Name = styled.p`
  font-size: 5rem;
  color: aliceblue;
  position: absolute;
  margin: 0;
`;

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