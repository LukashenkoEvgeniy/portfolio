import React from 'react';
import styled from 'styled-components';

import star from '../../../static/stars.png'



export default class Stars extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <StarsWrapper>
                <StarImage
                    ref={(ref) => this.ground = ref}
                    src={star}
                />
            </StarsWrapper>
        );
    }
}

const StarsWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const StarImage = styled.img`
  
`;