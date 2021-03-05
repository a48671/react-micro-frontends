import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './pages/main'
import { Prices } from './pages/prices'

export function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={Main} />
                <Route path="/prices" render={Prices} />
            </Switch>
        </BrowserRouter>
    );
}
