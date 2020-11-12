import React, { useState } from 'react';

import noImage from '../../images/image_not_found.png';

import BackgroundComponent from '../actions/BackgroundComponent';

type propsType = {
    name: string;
    airdate: string;
    season: number;
    episode: number;
    image: string | null;
    original: string | null;
}

const ItemComponent: React.FunctionComponent<propsType> = ({ name, airdate, season, episode, image, original }) => {
    const [ showOriginal, setShowOriginal ] = useState(false);

    const showOriginalHandler = () => {
        setShowOriginal(true);
    }

    const closeOriginalHandler = () => {
        setShowOriginal(false);
    }

    return (
        <div className="films-item">
            <div className="films-item-body">
                <div onClick={ showOriginalHandler } className="films-item-preview">
                    <img className="films-item-image" src={ image ? image : noImage } alt="preview "/>
                </div>
                <div className="films-item-info">
                    <div className="films-item-title">
                        { name }
                        <div className="films-item-subtitle">
                            { airdate.slice(0, 4) }
                        </div>
                    </div>
                    <div className="films-item-season-episode">
                        <span style={{marginRight: "9px"}}>{ `Сезон: ${ season }` }</span><span>{ `Эпизод: ${ episode }` }</span>
                    </div>
                </div>
            </div>
            { showOriginal && original && <BackgroundComponent /> }
            { showOriginal && original &&    <div className="item-original-preview">
                                                            <img className="item-original-image" src={ original } alt="original image"/>
                                                            <div onClick={ closeOriginalHandler } className="item-close-original">Закрыть</div>
                                                        </div> }
        </div>
    )
}

export default ItemComponent;