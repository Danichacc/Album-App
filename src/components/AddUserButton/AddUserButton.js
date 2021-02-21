import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './AddUserButton.css';

class _AddUserButton extends React.Component {
    render() {
        return (
            <Link to='/crud_user'>
                <button>
                    Add User
                </button>
            </Link>
        );
    }
}

export const AddUserButton = connect()(_AddUserButton);
