import React, {Component, PropTypes} from 'react';
import DocumentTitle from 'react-document-title';

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = {};
    }

    render () {
        return (
            <DocumentTitle title='My Web App'>
                <div>
                    Hi
                </div>
            </DocumentTitle>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;