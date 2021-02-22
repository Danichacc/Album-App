import React from 'react';
import {connect} from 'react-redux';
import {AddUserButton} from '../AddUserButton/AddUserButton';
import {Link} from 'react-router-dom';
import {setCurrentUser} from '../../store/actions';
import './UserList.css';

class _UserList extends React.Component {
    render() {
        return (
            <div className='users-wrapper'>
                {this.props.users.map((user, index) => (
                    <Link to='/crud' key={index}>
                        <span
                            className='user'
                            onClick={() => this.props.setUser(user)}
                        >
                            {user.username}
                        </span>
                    </Link>
                ))}
                <AddUserButton />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        currentUser: state.currentUser,
    }
}

export const UserList = connect(mapStateToProps, {setUser: setCurrentUser})(_UserList);
