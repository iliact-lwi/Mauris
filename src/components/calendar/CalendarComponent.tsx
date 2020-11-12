import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { rootStateType, calendarNextMonth, calendarPrevMonth, filmsSearchFilms } from '../../store/actions';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import switchHeaderMonth from '../_functions/switchMonth';

const CalendarComponent: React.FunctionComponent = () => {
    const currentDate = useSelector((state: rootStateType) => state.calendar.currentDate);
    const goToFilmsPage = useSelector((state: rootStateType) => state.actions.goToFilmsPage);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(goToFilmsPage) {
            history.push('/films');
        }
    }, [ goToFilmsPage ]);

    const getDay = (date: Date) => {
        let day = date.getDay();

        if (day === 0) day = 7;

        return day - 1;
    }

    const calendarCore = (currentDate: Date) => {
        type currentCalendarType = {
            id: number;
            value: number;
            current: boolean;
        }

        let currentId = 0;

        const currentCalendar: currentCalendarType[] = [];
        const tempDate = new Date(currentDate);
        tempDate.setDate(tempDate.getDate() - getDay(tempDate));

        for(let i = 0; i < getDay(currentDate); i++) {
            currentCalendar.push({ id: currentId++, value: tempDate.getDate(), current: false });
            tempDate.setDate(tempDate.getDate() + 1);
        }

        while (currentDate.getMonth() === tempDate.getMonth()) {
            currentCalendar.push({ id: currentId++, value: tempDate.getDate(), current: true });
    
            tempDate.setDate(tempDate.getDate() + 1);
        }

        for (let i = currentCalendar.length; i < 42; i++) {
            currentCalendar.push({ id: currentId++, value: tempDate.getDate(), current: false });
            tempDate.setDate(tempDate.getDate() + 1);
        }

        return currentCalendar;
    }

    const chevronIsDisable = (type: string, currentDate: Date): boolean => {
        if(type === 'next' && currentDate) {
            if(currentDate.getFullYear() === new Date().getFullYear() && currentDate.getMonth() === new Date().getMonth()) return true;
            else return false;
        }
        else if(type === 'prev' && currentDate) {
            if(currentDate.getFullYear() === 1980 && currentDate.getMonth() === 0) return true;
            else return false;
        }
        
        return true;
    }

    const nextHandler = (): boolean => {
        if(chevronIsDisable('next', currentDate)) return false;

        dispatch(calendarNextMonth(true));
        return true;
    }

    const prevHandler = (): boolean => {
        if(chevronIsDisable('prev', currentDate)) return false;

        dispatch(calendarPrevMonth(true));
        return true;
    }

    const searchFilms = (event: any) => {
        const target = event.target;
        const datadate = target.dataset.date;

        if(datadate !== 'false') {
            dispatch(filmsSearchFilms(datadate));
        }
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div className=
                {[ 
                    "calendar-chevron", chevronIsDisable('prev', currentDate) ? "calendar-chevron-disable" : "calendar-chevron-active"
                ].join(' ')} onClick={ prevHandler } ><ChevronLeftIcon /></div>

                {
                   switchHeaderMonth(currentDate)
                }

                <div className=
                {[ 
                    "calendar-chevron", chevronIsDisable('next', currentDate) ? "calendar-chevron-disable" : "calendar-chevron-active"
                ].join(' ')} onClick={ nextHandler } ><ChevronRightIcon /></div>
            </div>
            <div className="calendar-body" onClick={ searchFilms }>
                {
                    calendarCore(currentDate).map(date => {
                        return (
                            <div data-date=
                                { 
                                    date.current ? `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1) < 10 ? ('0' + (currentDate.getMonth() + 1)) : (currentDate.getMonth() + 1)}-${date.value < 10 ? ('0' + date.value) : date.value}` : date.current 
                                } 
                                key={ date.id } className={[ date.current ? "calendar-item" : "calendar-item-disable" ].join(' ')}>
                                { date.value }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CalendarComponent;