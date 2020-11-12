import  { combineReducers } from 'redux';

import calendarReducer from './calendarReducer';
import filmsReducer from './filmsReducer';
import actionsReducer from './actionsReducer';

export default combineReducers({
    calendar: calendarReducer,
    films: filmsReducer,
    actions: actionsReducer
});