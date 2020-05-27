import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import {LoginContainer} from './containers';
import {UsersContainer} from './containers';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/login' render={() => <LoginContainer/>}/>
                <Route exact path='/users' render={() => <UsersContainer/>}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </>
    );
}

export default App;
