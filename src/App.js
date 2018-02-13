import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import querystring from "querystring";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {


    componentWillMount() {
        axios.get('https://cnodejs.org/api/v1/topics')
            .then((res) => {
                console.log(res)
            });

        axios.post('https://cnodejs.org/api/v1/user/alsotang',
            querystring.stringify(
                {accesstoken: '14f5caa5-92d2-4c90-8afd-8d7f0d11ba83'}
            ))
            .then((res) => {
                console.log(res)
            });

    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <RaisedButton label="Material UI" />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
