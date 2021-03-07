import React from 'react';
import {connect} from 'react-redux';
import {AddUserButton} from '../AddUserButton/AddUserButton';
import {Link} from 'react-router-dom';
import {setCurrentUser} from '../../store/currentUser';
import {Preloader} from '../Preloader/Preloader';
import './UserList.css';

class _UserList extends React.Component {
    render() {
        if (this.props.fetchedData.isFetching) {
            return <Preloader />;
        }

        return (
            <div className='users-wrapper'>
                {this.props.fetchedData.users.map((user, index) => (
                    <span
                        className='user'
                        key={index}
                        onClick={() => this.props.setUser(user)}
                    >
                        <Link to='/crud'>
                            {user.username}
                        </Link>
                    </span>
                ))}
                <AddUserButton />
            </div>
        );
    }
}

export const UserList = connect(null, {setUser: setCurrentUser})(_UserList);
