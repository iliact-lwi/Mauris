import { CALENDAR_NEXT_MONTH, CALENDAR_PREV_MONTH, CALENDAR_SEARCH_DATE } from '../types';

import { calendarStateType, ActionTypes } from '../actions';

const createState = (action?: string, state?: calendarStateType): Date => {
    if(action === 'next' && state) {
        const tempdate: Date = new Date(state.currentDate);
        tempdate.setMonth(tempdate.getMonth() + 1);

        return tempdate;
    }
    else if(action === 'prev' && state) {
        const tempdate: Date = new Date(state.currentDate);
        tempdate.setMonth(tempdate.getMonth() - 1);
        
        return tempdate;
    }

    const currentDate = new Date();

    return new Date(currentDate.getFullYear(), currentDate.getMonth());
}

const initialState: calendarStateType = {
    currentDate: createState(),
    searchDate: 'null'
}

const calendarReducer = (state: calendarStateType = initialState, action: ActionTypes) => {
    switch(action.type) {
        case CALENDAR_NEXT_MONTH: {
            return { ...state, currentDate: createState('next', state) }
        }

        case CALENDAR_PREV_MONTH: {
            return { ...state, currentDate: createState('prev', state) }
        }

        case CALENDAR_SEARCH_DATE: {
            return { ...state, searchDate: action.search }
        }

        default: return state;
    }
}

export default calendarReducer;