import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './Components/Globals/Layout';
import Login from './Components/Login';
import Register from './Components/Register';
import MemsAddition from './Components/MemsAddition';

ReactDOM.render(
    <Router>
        <Switch>
            <Layout>
                <Route path="/" exact component={MemsAddition} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/memsAddition" exact component={MemsAddition} />
            </Layout>
        </Switch>
    </Router>,
    document.getElementById('root') as HTMLElement
);
