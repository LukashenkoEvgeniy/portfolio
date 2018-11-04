import planets from './planets';
import loading from './loading';
import { combineReducers } from 'redux'

const reducers = combineReducers({
    planets,
    loading,
});

export default reducers