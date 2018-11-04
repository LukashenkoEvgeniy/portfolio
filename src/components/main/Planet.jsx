import React from 'react';
import styled from 'styled-components';

export default function Planet({onClick, planet}) {
        return (
            <PlanetWrapper onClick={onClick}>
                <Name>{planet.name}</Name>
                <PlanetImage
                    src={planet.img}
                />
            </PlanetWrapper>
        );
}

const Name = styled.p`
  font-size: 5rem;
  color: aliceblue;
  position: absolute;
  margin: 0;
  z-index: 11;
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