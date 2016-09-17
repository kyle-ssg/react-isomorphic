import React, {Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';

const NotFoundPage = class extends Component {
    displayName: 'NotFoundPage'

    render () {
        return (
            <div>
                You are lost m8
            </div>
        );
    }
};

NotFoundPage.propTypes = {};

module.exports = NotFoundPage;