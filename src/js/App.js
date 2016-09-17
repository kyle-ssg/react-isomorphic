import React, {Component, PropTypes} from 'react';
import Header from './Header';

const App = class extends Component {
    displayName: 'App';

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