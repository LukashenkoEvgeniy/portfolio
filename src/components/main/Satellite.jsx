import React from 'react';
import styled, {keyframes} from 'styled-components';
import satellite from '../../static/satellite.png'

export default function Satellite () {
        return (
            <SatelliteWrapper>
                <SatelliteImage
                    src={satellite}
                />
            </SatelliteWrapper>
        );
}

const fly = keyframes`
  from {
    left: -200px;
    top: ${Math.random() * (800 - 10) + 10}px;
  }

  to {
       left: 1500px;
       top: ${Math.random() * (800 - 10) + 10}px;
  }
`;

const SatelliteWrapper = styled.div`
  width: 15%;
  position: fixed;
  top: 50px;
  left: 50px;
  animation: ${fly} 25s linear infinite;
`;

const SatelliteImage = styled.img`
   width: 100%;
   @media (max-width: 700px) {
    width: 90%;
  }
`;
