import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearCurrentUser} from '../../store/actions';
import './AddUserButton.css';

class _AddUserButton extends React.Component {
    render() {
        return (
            <Link to='/crud'>
                <button onClick={() => this.props.clearForm()}>
                    Add User
                </button>
            </Link>
        );
    }
}

export const AddUserButton = connect(null, {clearForm: clearCurrentUser})(_AddUserButton);
