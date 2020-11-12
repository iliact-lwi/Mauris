import { 
    CALENDAR_NEXT_MONTH,
    CALENDAR_PREV_MONTH,
    CALENDAR_SEARCH_DATE, 
    FILMS_SEARCH_FILMS, 
    ACTIONS_LOADING_FILMS, 
    ACTIONS_GO_TO_FILMS_PAGE 
} from '../types';

import { ThunkAction } from 'redux-thunk';

export type calendarStateType = {
    currentDate: Date;
    searchDate: string;
}

type filmsType = {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
        medium: string;
        original: string;
    } | null;
    summary: string;
    show: any;
    links: any;
}

export type filmsStateType = {
    films: filmsType[];
}

export type actionsStateType = {
    loadingFilms: boolean;
    goToFilmsPage: boolean;
}

export type rootStateType = {
    calendar: calendarStateType;
    films: filmsStateType;
    actions: actionsStateType;
}

type calendarNextMonthActionType = {
    type: typeof CALENDAR_NEXT_MONTH;
    isTrue: boolean;
}

type calendarPrevMonthActionType = {
    type: typeof CALENDAR_PREV_MONTH;
    isTrue: boolean;
}

type calendarSearchDateActionType = {
    type: typeof CALENDAR_SEARCH_DATE;
    search: string;
}

type filmsSearchFilmsCurrentActionType = {
    type: typeof FILMS_SEARCH_FILMS;
    films: filmsType[];
}

type actionsLoadingFilmsActionType = {
    type: typeof ACTIONS_LOADING_FILMS;
    action: boolean;
}

type actionsGoToFilmsPageActionType = {
    type: typeof ACTIONS_GO_TO_FILMS_PAGE;
    action: boolean;
}

export const calendarNextMonth = (isTrue: boolean): calendarNextMonthActionType => {
    return {
        type: CALENDAR_NEXT_MONTH,
        isTrue
    }
}

export const calendarPrevMonth = (isTrue: boolean): calendarPrevMonthActionType => {
    return {
        type: CALENDAR_PREV_MONTH,
        isTrue
    }
}

export const calendarSearchDate = (search: string): calendarSearchDateActionType => {
    return {
        type: CALENDAR_SEARCH_DATE,
        search
    }
}

const filmsSearchFilmsCurrent = (films: filmsType[]): filmsSearchFilmsCurrentActionType => {
    return {
        type: FILMS_SEARCH_FILMS,
        films
    }
}

const actionsLoadingFilms = (action: boolean): actionsLoadingFilmsActionType => {
    return {
        type: ACTIONS_LOADING_FILMS,
        action
    }
}

export const actionsGoToFilmsPage = (action: boolean): actionsGoToFilmsPageActionType => {
    return {
        type: ACTIONS_GO_TO_FILMS_PAGE,
        action
    }
}

export const filmsSearchFilms = (date: string): ThunkAction<void, unknown, unknown, ActionTypes> => {
    return async dispatch => {
        try {
            dispatch(actionsLoadingFilms(true));

            const response = await fetch(`http://api.tvmaze.com/schedule?country=US&date=${date}`);

            if(response.ok === true) {
                const json: filmsType[] = await response.json();
    
                dispatch(calendarSearchDate(date));
                dispatch(filmsSearchFilmsCurrent(json));
                dispatch(actionsLoadingFilms(false));
                dispatch(actionsGoToFilmsPage(true));
            } else {
                throw new Error('The request failed!');
            }
        } catch(error) {
            dispatch(actionsLoadingFilms(false));
            console.log(error.message);
        }
    }
}

export type ActionTypes = 
    calendarNextMonthActionType |
    calendarPrevMonthActionType | 
    filmsSearchFilmsCurrentActionType | 
    actionsLoadingFilmsActionType |
    actionsGoToFilmsPageActionType |
    calendarSearchDateActionType;

