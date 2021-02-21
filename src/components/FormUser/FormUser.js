import React from 'react';
import {connect} from 'react-redux';
import {clearCurrentUser, createUser, deleteUser, editCurrentUser, fetchData, updateUser} from '../../store/actions';
import './FormUser.css';

class _FormUser extends React.Component {
    render() {
        const {currentUser} = this.props;

        return (
            <div className='form-wrapper'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={currentUser.name}
                    onChange={event => this.props.changeInput('name', event.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    type='text'
                    name='username'
                    value={currentUser.username}
                    onChange={event => this.props.changeInput('username', event.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    value={currentUser.email}
                    onChange={event => this.props.changeInput('email', event.target.value)}
                />
                <label htmlFor='street'>Street</label>
                <input
                    type='text'
                    name='street'
                    value={currentUser.address.street}
                    onChange={event => this.props.changeInput('street', event.target.value)}
                />
                <label htmlFor='suite'>Suite</label>
                <input
                    type='text'
                    name='suite'
                    value={currentUser.address.suite}
                    onChange={event => this.props.changeInput('suite', event.target.value)}
                />
                <label htmlFor='city'>City</label>
                <input
                    type='text'
                    name='city'
                    value={currentUser.address.city}
                    onChange={event => this.props.changeInput('city', event.target.value)}
                />
                <label htmlFor='zipcode'>Zipcode</label>
                <input
                    type='text'
                    name='zipcode'
                    value={currentUser.address.zipcode}
                    onChange={event => this.props.changeInput('zipcode', event.target.value)}
                />
                <label htmlFor='lat'>Lat</label>
                <input
                    type='text'
                    name='lat'
                    value={currentUser.address.geo.lat}
                    onChange={event => this.props.changeInput('lat', event.target.value)}
                />
                <label htmlFor='lng'>Lng</label>
                <input
                    type='text'
                    name='lng'
                    value={currentUser.address.geo.lng}
                    onChange={event => this.props.changeInput('lng', event.target.value)}
                />
                <label htmlFor='phone'>Phone</label>
                <input
                    type='tel'
                    name='phone'
                    value={currentUser.phone}
                    onChange={event => this.props.changeInput('phone', event.target.value)}
                />
                <label htmlFor='website'>Website</label>
                <input
                    type='text'
                    name='website'
                    value={currentUser.website}
                    onChange={event => this.props.changeInput('website', event.target.value)}
                />
                <label htmlFor='company-name'>Company</label>
                <input
                    type='text'
                    name='company-name'
                    value={currentUser.company.name}
                    onChange={event => this.props.changeInput('company-name', event.target.value)}
                />
                <label htmlFor='catchPhrase'>Catch Phrase</label>
                <input
                    type='text'
                    name='catchPhrase'
                    value={currentUser.company.catchPhrase}
                    onChange={event => this.props.changeInput('catchPhrase', event.target.value)}
                />
                <label htmlFor='bs'>Bs</label>
                <input
                    type='text'
                    name='bs'
                    value={currentUser.company.bs}
                    onChange={event => this.props.changeInput('bs', event.target.value)}
                />
                <button
                    onClick={() => {
                        if (this.props.users.some(user => user.id === currentUser.id)) {
                            this.props.editUser(currentUser);
                        } else {
                            this.props.addUser(currentUser);
                        }
                        this.props.clearForm();
                    }}
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        this.props.removeUser(currentUser);
                        this.props.clearForm();
                    }}
                    disabled={currentUser.id === ''}
                >
                    Delete
                </button>
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

export const FormUser = connect(mapStateToProps, {
    readUsers: fetchData,
    addUser: createUser,
    editUser: updateUser,
    removeUser: deleteUser,
    changeInput: editCurrentUser,
    clearForm: clearCurrentUser,
})(_FormUser);
