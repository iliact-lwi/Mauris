import React from 'react';

import DescriptionComponent from '../components/description/DescriptionComponent';
import CalendarComponent from '../components/calendar/CalendarComponent';

const HomePage: React.FunctionComponent = () => {
    return (
        <main>
            <DescriptionComponent />
            <CalendarComponent />
        </main>
    )
}

export default HomePage;