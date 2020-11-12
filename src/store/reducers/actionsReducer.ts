import { ACTIONS_LOADING_FILMS, ACTIONS_GO_TO_FILMS_PAGE } from '../types';

import { actionsStateType, ActionTypes } from '../actions';

const initialState: actionsStateType = {
    loadingFilms: false,
    goToFilmsPage: false
}

const actionsReducer = (state: actionsStateType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case ACTIONS_LOADING_FILMS: {
            return { ...state, loadingFilms: action.action }
        }

        case ACTIONS_GO_TO_FILMS_PAGE: {
            return { ...state, goToFilmsPage: action.action }
        }

        default: return state;
    }
}

export default actionsReducer;