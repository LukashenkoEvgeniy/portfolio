import React from 'react';
import styled, {keyframes} from 'styled-components';
import stars from '../../static/stars.png'

export default class Stars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {offset: 0};
        this.scrollListener = this.scrollListener.bind(this)
    }

    componentDidMount() {
        let efficientScrollListener = this.debounce(() => {
            this.setState({offset: 0 - window.pageYOffset});
        }, 50);

        document.addEventListener("scroll", this.scrollListener)
    }

    scrollListener() {
        this.setState({offset: Math.round(window.pageYOffset * 0.80)});
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            let context = this;
            let args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    render() {
        return (
            <StarsWrapper offset={this.state.offset}>
                <StarsImage
                    src={stars}
                />
            </StarsWrapper>
        );
    }
}

const StarsWrapper = styled.div`
  opacity: 0.2; 
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${props => props.offset}px;
  left: 0;
`;

const StarsImage = styled.img`
   width: 100%;
`;
