import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearCurrentUser} from '../../store/currentUser';
import {Button} from '@material-ui/core';

class _AddUserButton extends React.Component {
    render() {
        return (
            <Button
                component={Link}
                to='/crud'
                variant='contained'
                color='primary'
                size='small'
                onClick={() => this.props.clearForm()}
                style={{ width: '85px' }}
            >
                Add User
            </Button>
        );
    }
}

export const AddUserButton = connect(null, {clearForm: clearCurrentUser})(_AddUserButton);
