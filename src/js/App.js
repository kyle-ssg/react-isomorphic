import React, {Component, PropTypes} from 'react';
import Header from './Header';

const App = class extends Component {
    displayName: 'App';

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount () {
        //Clear up initial parameters element to ensure it is only used once
        document.body.removeChild(document.getElementById('params'));
    }

    render () {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
};

module.exports = App;