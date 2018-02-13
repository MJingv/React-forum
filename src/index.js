import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react'
import appState from './store/app-state'

import TopicList from './views/topic-list/index'
import TopicDetail from './views/topic-detail/index'

injectTapEventPlugin();

const MyRouter = () => (
    <Provider appState={appState}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/list" component={TopicList}/>
                <Route path="/detail" component={TopicDetail}/>
            </Switch>
        </Router>
    </Provider>
)
ReactDOM.render(<MyRouter/>, document.getElementById('root'));
registerServiceWorker();