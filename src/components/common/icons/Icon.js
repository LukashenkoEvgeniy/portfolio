import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {iconSizes, snowColor} from '../../styles/style-constants';
import {sideBarIcons} from './navigationIcons'

const icons = {...sideBarIcons};

const Icon = styled(IconContainer)`
  svg {
    fill:  ${snowColor};
    height: ${props => iconSizes[props.size]};
    width: ${props => iconSizes[props.size]};
  }
`;
export default Icon;

function IconContainer({name, size}) {
    return (
        <span>
            {icons[name]}
        </span>
    )
}

Icon.propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(iconSizes)),
};

Icon.defaultProps = {
    disabled: false,
    name: '',
    size: 'S',
    onClick: () => {}
};

IconContainer.propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOf(Object.keys(iconSizes)),
};

IconContainer.defaultProps = {
    name: '',
    size: 'S',
};