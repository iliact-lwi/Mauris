import React from 'react';

import { Spinner } from 'react-bootstrap';

const LoadingComponent: React.FunctionComponent = () => {
    return (
        <div className="actions-loading">
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}

export default LoadingComponent;