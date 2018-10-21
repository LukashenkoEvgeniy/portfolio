import React from 'react';
import styled from 'styled-components';

import mountains from '../../../static/mountains.jpg'

export default function Deeper() {

    return (
        <BackgroundImage>

        </BackgroundImage>
    );
}

const BackgroundImage = styled.div`
  height: 100%;
  background-image: url(${mountains});
`;