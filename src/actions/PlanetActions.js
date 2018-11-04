import * as types from '../constants/ActionTypes';

export function selectPlanet(id) {
    return {
        type: types.SELECT_PLANET,
        id
    };
}
