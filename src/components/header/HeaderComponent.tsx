import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { rootStateType, actionsGoToFilmsPage } from '../../store/actions';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const HeaderComponent: React.FunctionComponent = () => {
    const goToFilmsPage = useSelector((state: rootStateType) => state.actions.goToFilmsPage);
    const dispatch = useDispatch();
    const history = useHistory();

    const backHandler = () => {
        dispatch(actionsGoToFilmsPage(false));
        history.push('/');
    }

    return (
        <header className="header">

            {
                goToFilmsPage && <div onClick={ backHandler } className="header-back"><ChevronLeftIcon fontSize="large" /></div>
            }

            <div className="header-logo">
                SUPER FILM
            </div>
        </header>
    )
}

export default HeaderComponent;