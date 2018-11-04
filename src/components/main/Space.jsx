import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

import * as PlanetActions from '../../actions/PlanetActions';
import space from '../../static/space.jpg'
import Planet from "./Planet";
import Satellite from "./Satellite";
import Description from "./Description";


const mapStateToProps = state => ({
    planetList: state.planets.planetList,
    selectedPlanet: state.planets.selectedPlanet
});

@connect(mapStateToProps)
export default class Space extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {planetList, selectedPlanet, dispatch} = this.props;
        const actions = bindActionCreators(PlanetActions, dispatch);
        return (
            <SpaceBackgrond>
                <Satellite/>
                {planetList.map((planet) => (
                        <Planet
                            key={planet.id}
                            onClick={() => actions.selectPlanet(planet.id)}
                            planet={planet}/>
                    )
                )}
                {selectedPlanet && <Description planet={selectedPlanet}/>}
            </SpaceBackgrond>
        );
    }
}

const SpaceBackgrond = styled.div`
  background: url(${space}) fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
