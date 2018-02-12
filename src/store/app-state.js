// import {observable, computed, autorun, action} from 'mobx-react';
import {observable} from 'mobx';

var appState = observable({
    timer: 0
});

export default appState