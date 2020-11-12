import React from  'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { rootStateType } from './store/actions';

import { Container } from 'react-bootstrap'; 

import HeaderComponent from './components/header/HeaderComponent';

import HomePage from './pages/HomePage';
import FilmsPage from './pages/FilmsPage';

import LoadingComponent from './components/actions/LoadingComponent';
import BackgroundComponent from './components/actions/BackgroundComponent';

const App: React.FunctionComponent = () => {
    const loadingFilms = useSelector((state: rootStateType) => state.actions.loadingFilms);

    return (
        <Router>
            <Container fluid className="p-0 position-fixed index-1000">
                <HeaderComponent />
            </Container>
            <Container fluid className="page-styles">
                {
                    loadingFilms && <BackgroundComponent />
                }
                {
                    loadingFilms && <LoadingComponent />
                }
                <Switch>
                    <Route component={ HomePage } path="/" exact />
                    <Route component={ FilmsPage } path="/films" />
                </Switch>
            </Container>
        </Router>
    )
}

export default App;