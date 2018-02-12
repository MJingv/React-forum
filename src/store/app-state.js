import {observable, computed, autorun, action} from 'mobx';

class AppState {
    @observable count;
    @observable name;

    constructor() {
        this.count = 0;
        this.name = 'jehol';

    }

    @computed get msg() {
        return `${this.count} aaa ${this.name}`
    }

    @action add() {
        this.count += 1
    }
}

const appState = new AppState()

autorun(() => {
    console.log(appState.msg)
})

setInterval(() => {
    appState.add()
}, 1000)

export default appState