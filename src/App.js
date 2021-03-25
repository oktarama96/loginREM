import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';
import Daftar from './Daftar';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/daftar" component={Daftar}></Route>
                <Route path="/home" component={Home}></Route>
            </Switch>
        </div>
    )
}
export default App;