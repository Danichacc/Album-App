import React from 'react';
import {connect} from 'react-redux';
import {
    clearCurrentUser,
    editCurrentUser,
    editCurrentUserAddress,
    editCurrentUserCompany,
    editCurrentUserGeo
} from '../../store/currentUser';
import {
    createEntity,
    updateEntity,
    deleteEntity,
    crudEntity,
} from '../../store/fetchedData';
import {Button, TextField, makeStyles} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function _FormUser(props) {
    const {currentUser} = props;
    const isSaveDisabled = currentUser.name === '' || currentUser.username === '';

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '50ch',
            },
        },
    }));

    const classes = useStyles();

    function saveUser() {
        if (props.users.some(user => user.id === currentUser.id)) {
            props.crudUser(updateEntity, currentUser);
        } else {
            props.crudUser(createEntity, currentUser);
        }

        props.clearInputs();
    }

    async function deleteUser() {
        for (const album of props.albums) {
            if (album.userId.toString() !== currentUser.id) {
                continue;
            }

            for (const photo of props.photos) {
                if (photo.albumId !== album.id) {
                    continue;
                }

                await props.crudUser(deleteEntity, photo);
            }

            await props.crudUser(deleteEntity, album);
        }

        props.crudUser(deleteEntity, currentUser);
        props.clearInputs();
    }

    return (
        <form className={classes.root}>
            <TextField
                label='Name'
                variant='filled'
                id='name'
                value={currentUser.name}
                onChange={event => props.changeInput('name', event.target.value)}
            />
            <TextField
                label='Username'
                variant='filled'
                id='username'
                value={currentUser.username}
                onChange={event => props.changeInput('username', event.target.value)}
            />
            <TextField
                label='Email'
                variant='filled'
                id='email'
                value={currentUser.email}
                onChange={event => props.changeInput('email', event.target.value)}
            />
            <TextField
                label='Street'
                variant='filled'
                id='street'
                value={currentUser.address.street}
                onChange={event => props.changeInputAddress('street', event.target.value)}
            />
            <TextField
                label='Suite'
                variant='filled'
                id='suite'
                value={currentUser.address.suite}
                onChange={event => props.changeInputAddress('suite', event.target.value)}
            />
            <TextField
                label='City'
                variant='filled'
                id='city'
                value={currentUser.address.city}
                onChange={event => props.changeInputAddress('city', event.target.value)}
            />
            <TextField
                label='Zipcode'
                variant='filled'
                id='zipcode'
                value={currentUser.address.zipcode}
                onChange={event => props.changeInputAddress('zipcode', event.target.value)}
            />
            <TextField
                label='Lat'
                variant='filled'
                id='lat'
                value={currentUser.address.geo.lat}
                onChange={event => props.changeInputGeo('lat', event.target.value)}
            />
            <TextField
                label='Lng'
                variant='filled'
                id='lng'
                value={currentUser.address.geo.lng}
                onChange={event => props.changeInputGeo('lng', event.target.value)}
            />
            <TextField
                label='Phone'
                variant='filled'
                id='phone'
                value={currentUser.phone}
                onChange={event => props.changeInput('phone', event.target.value)}
            />
            <TextField
                label='Website'
                variant='filled'
                id='website'
                value={currentUser.website}
                onChange={event => props.changeInput('website', event.target.value)}
            />
            <TextField
                label='Company Name'
                variant='filled'
                id='company-name'
                value={currentUser.company.name}
                onChange={event => props.changeInputCompany('name', event.target.value)}
            />
            <TextField
                label='Catch Phrase'
                variant='filled'
                id='catchPhrase'
                value={currentUser.company.catchPhrase}
                onChange={event => props.changeInputCompany('catchPhrase', event.target.value)}
            />
            <TextField
                label='BS'
                variant='filled'
                id='bs'
                value={currentUser.company.bs}
                onChange={event => props.changeInputCompany('bs', event.target.value)}
            />
            <div>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<SaveIcon />}
                    style={{ marginRight: '10px' }}
                    onClick={() => saveUser()}
                    disabled={isSaveDisabled}
                >
                    Save
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteUser()}
                    disabled={currentUser.id === ''}
                >
                    Delete
                </Button>
            </div>
        </form>
    );
}

function mapStateToProps(state) {
    return {
        users: state.fetchedData.users,
        albums: state.fetchedData.albums,
        photos: state.fetchedData.photos,
        currentUser: state.currentUser,
    };
}

export const FormUser = connect(mapStateToProps, {
    crudUser: crudEntity,
    changeInput: editCurrentUser,
    changeInputAddress: editCurrentUserAddress,
    changeInputCompany: editCurrentUserCompany,
    changeInputGeo: editCurrentUserGeo,
    clearInputs: clearCurrentUser,
})(_FormUser);
