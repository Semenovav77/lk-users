import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import {LoginContainer} from './containers';
import {UsersContainer} from './containers';
import {PrivateRoute} from './components';

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Redirect to={'/users'}/>
                </Route>
                <Route exact path='/login' render={() => <LoginContainer/>}/>
                {/*<Route exact path='/users' render={() => <UsersContainer/>}/>*/}
                <PrivateRoute exact path='/users' component={UsersContainer}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </>
    );
}

export default App;
