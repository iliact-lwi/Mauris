import { FILMS_SEARCH_FILMS } from '../types';

import { filmsStateType, ActionTypes } from '../actions';

const initialState: filmsStateType = {
    films: []
}

const filmsReducer = (state: filmsStateType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case FILMS_SEARCH_FILMS: {
            return { ...state, films: action.films }
        }

        default: return state;
    }
}

export default filmsReducer;