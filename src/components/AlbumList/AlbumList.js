import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Link} from 'react-router-dom';
import './AlbumList.css';
import {setCurrentAlbum} from '../../store/actions';

class _AlbumList extends React.Component {
    findAuthor(index) {
        return (
            this.props.users.filter(user => user.id === index.toString())
                .map((user, index) => (
                    <div key={index}>Author: {user.username}</div>
        )));
    }

    render() {
        return (
            <div className='albums-wrapper'>
                <Switch>
                    <Route exact path='/albums'>
                        {this.props.albums.map((album, index) => (
                            <div className='album' key={index}>
                                {this.findAuthor(album.userId)}
                                <div>Title: {album.title}</div>
                                <Link to={`/albums/${album.id}`}>
                                    <img
                                        src={this.props.photos.filter(photo => photo.albumId === album.id)
                                            .map(photo => photo.thumbnailUrl)}
                                        alt='Whoops'
                                        onClick={() => this.props.pickAlbum(album)}
                                    />
                                </Link>
                            </div>
                        ))}
                    </Route>
                    <Route path={`/albums/${this.props.currentAlbum.id}`}>
                        {this.props.photos.filter(photo => photo.albumId === this.props.currentAlbum.id)
                            .map((photo, index) => (
                                <img src={photo.url} alt='Whoops' key={index} />
                        ))}
                    </Route>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        currentUser: state.currentUser,
        albums: state.albums,
        currentAlbum: state.currentAlbum,
        photos: state.photos,
    };
}

export const AlbumList = connect(mapStateToProps, {pickAlbum: setCurrentAlbum})(_AlbumList);
