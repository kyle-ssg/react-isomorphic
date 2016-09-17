import React, {Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';

const HomePage = class extends Component {
    displayName: 'HomePage';

    render () {
        return (
            <DocumentTitle title='Hello'>
                <div>
                    Home
                </div>
            </DocumentTitle>
        );
    }
};

module.exports = HomePage;