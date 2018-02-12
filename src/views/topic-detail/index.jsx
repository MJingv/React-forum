import React from 'react'
import {observer,inject} from 'mobx-react';

@inject('appState')
@observer
export default class TopicDetail extends React.Component {
    componentDidMount() {
        // do something here
        console.log(this.props.appState)
    }

    render() {
        return (
            <div>i am detail + {this.props.appState.timer} </div>
        )
    }
}
