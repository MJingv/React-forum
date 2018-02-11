import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import TopicList from './views/topic-list/index'
import TopicDetail from './views/topic-detail/index'

const MyRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/list" component={TopicList}/>
            <Route path="/detail" component={TopicDetail}/>
        </div>
    </Router>
)
ReactDOM.render(<MyRouter />, document.getElementById('root'));
