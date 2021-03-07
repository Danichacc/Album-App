import React from 'react';
import {connect} from 'react-redux';
import {AddUserButton} from '../AddUserButton/AddUserButton';
import {Link} from 'react-router-dom';
import {setCurrentUser} from '../../store/currentUser';
import {fetchData, TOKEN_USERS} from '../../store/fetchedData';
import {Preloader} from '../Preloader/Preloader';
import './UserList.css';

class _UserList extends React.Component {
    componentDidMount() {
        this.props.getUsers(TOKEN_USERS);
    }

    render() {
        if (this.props.isFetching) {
            return <Preloader />;
        }

        return (
            <div className='users-wrapper'>
                {this.props.users.map((user, index) => (
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

function mapStateToProps(state) {
    return {
        users: state.fetchedData.users,
        isFetching: state.fetchedData.isFetching,
    }
}

export const UserList = connect(mapStateToProps, {
    getUsers: fetchData,
    setUser: setCurrentUser,
})(_UserList);
