import React from 'react';
import styled, {keyframes} from 'styled-components';

export default function Description ({planet}) {
        return (
            <DesciptionWrapper>
                <Header>{planet.name}</Header>
                <Text>
                    {planet.description}
                </Text>
            </DesciptionWrapper>
        );
}

const Text = styled.div`
  border: darkcyan solid 1px;
  padding: 5px;
  background: linear-gradient(to top left, rgba(0,139,139,0.5), rgba(53,70,39,0.5));;


`;
const Header = styled.div`
    border: darkcyan solid 1px;
    border-radius: 0 70% 0 70%;
    background: linear-gradient(to top left, rgba(0,139,139,0.5), rgba(53,70,39,0.5));;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 40px;
`;

const show = keyframes`
  from {
    left: -400px;
  }

  to {
        left: 100px;
  }
`;

const DesciptionWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 100px;
  display: flex;
  color: white;
  height: 100% - 200px;
  width: 300px;
  overflow-x: auto;
  flex-direction: column;
  align-items: center;
  animation: ${show} 5s linear;
`;
