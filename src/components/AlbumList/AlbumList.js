import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Link} from 'react-router-dom';
import {setCurrentAlbum} from '../../store/currentAlbum';
import './AlbumList.css';

class _AlbumList extends React.Component {
    getAuthor(albumUserId) {
        return this.props.fetchedData.users.filter(user => user.id === albumUserId.toString())
            .map(user => user.username);
    }

    parsePhotos() {
        return (
            this.props.fetchedData.photos.filter(photo => photo.albumId === this.props.currentAlbum.id)
                .map((photo, index) => (
                    <img src={photo.url} className='photo' alt='Whoops' key={index} />
        )));
    }

    render() {
        return (
            <div className='albums-wrapper'>
                <Switch>
                    <Route exact path='/albums'>
                        {this.props.fetchedData.albums.map((album, index) => (
                            <div className='album' key={index}>
                                <div className='album-author'>Author: {this.getAuthor(album.userId)}</div>
                                <div className='album-title'>Title: {album.title}</div>
                                <Link to={`/albums/${album.id}`}>
                                    <img
                                        src={this.props.fetchedData.photos.filter(photo => photo.albumId === album.id)
                                                .map(photo => photo.thumbnailUrl)}
                                        alt='Whoops'
                                        onClick={() => this.props.pickAlbum(album)}
                                    />
                                </Link>
                            </div>
                        ))}
                    </Route>
                    <Route path={`/albums/${this.props.currentAlbum.id}`}>
                        {this.parsePhotos()}
                    </Route>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentAlbum: state.currentAlbum,
    };
}

export const AlbumList = connect(mapStateToProps, {pickAlbum: setCurrentAlbum})(_AlbumList);
