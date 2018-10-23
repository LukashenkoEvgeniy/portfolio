import React from 'react';
import styled from 'styled-components';

export default class Planet extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({showDescription: false})
    }

    showDescription() {
        this.setState({showDescription: true})
    }

    render() {
        return (
            <PlanetWrapper onClick={() => this.showDescription()}>
                <Name>{this.props.name}</Name>
                <PlanetImage
                    src={this.props.planet.img}
                />
                {this.state.showDescription && <PlanetDescription>
                    {this.props.planet.description}
                </PlanetDescription>
                }
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

const PlanetDescription = styled.div`
  color: red;
  font-size: 25px;
`;

const PlanetImage = styled.img`
  &:hover {
    transform: scale(1.1)
  }
   transition: all .2s ease-in-out;
   transition-duration: 3s;
   width: 50%;
   @media (max-width: 700px) {
    width: 90%;
  }
  
  z-index: 10;
`;