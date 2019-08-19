import React from 'react';

import {
    Alert
} from 'reactstrap';


class MessageAlertBox extends React.Component {
    render() {
        return (
            <Alert
                color={this.props.color}
                isOpen={this.props.visible}
                toggle={this.props.onDismiss}>
                {this.props.alertMessage}
            </Alert>
        )
    }
}

export default MessageAlertBox;
