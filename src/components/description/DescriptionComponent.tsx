import React from 'react';

import tvImage from '../../images/tv.png';

const DescriptionComponent: React.FunctionComponent = () => {
    return (
        <div>
            <div className="description-tv">
                <img src={ tvImage } alt="tv" />
            </div>
            <div className="description-text">
                Для получения списка сериалов, пожалуйста, выберите необходимый месяц и день.
            </div>
        </div>
    )
}

export default DescriptionComponent;