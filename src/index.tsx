import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Components/Globals/Layout';
import Login from './Components/Login';
import Register from './Components/Register';

ReactDOM.render(
    <Router>
        <Switch>
            <Layout>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Layout>
        </Switch>
    </Router>,
    document.getElementById('root') as HTMLElement
);
