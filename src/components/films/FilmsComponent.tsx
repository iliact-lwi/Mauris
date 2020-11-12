import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { rootStateType } from '../../store/actions';

import ItemComponent from './ItemComponent';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import switchTitleMonth from '../_functions/switchMonth';

const FilmsComponent: React.FunctionComponent = () => {
    const [ showMore, setShowMore ] = useState(true);
    const [ sliceFilms, setSliceFilms ] = useState(3);

    const searchDate = useSelector((state: rootStateType) => state.calendar.searchDate);
    const films = useSelector((state: rootStateType) => state.films.films);

    const filterFilms = films.slice(0, sliceFilms);

    const filmsMoreHandler = () => {
        setSliceFilms(films.length);
        setShowMore(false);
    }

    return (
        <div className="films">
            <div className="films-search-date">
                { `${ Number(searchDate.slice(8)) } ${ switchTitleMonth(undefined, (Number(searchDate.slice(5, 7))) - 1) } ${ searchDate.slice(0, 4) }` }
            </div>

            {
                !!filterFilms.length ?  filterFilms.map(item => {
                    return (
                        <ItemComponent 
                            key={ item.id } 
                            name={ item.name } 
                            airdate={ item.airdate } 
                            season={ item.season } 
                            episode={ item.number } 
                            image={ item.image ? item.image.medium : item.image }
                            original={ item.image ? item.image.original : item.image }
                        />
                    )
                }) : <div style={{textAlign: "center", fontWeight: 600, padding: "40px"}}>No films by this date</div>
            }

           {
               showMore &&  <div onClick={ filmsMoreHandler } className="films-more">
                                        <span className="films-more-text">{ `Еще ${ films.length - filterFilms.length } сериала` }</span>
                                        <div className="films-more-button"><KeyboardArrowDownIcon /></div>
                                    </div>
           }
        </div>
    )
}

export default FilmsComponent;
