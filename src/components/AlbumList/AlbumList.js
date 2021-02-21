import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Link} from 'react-router-dom';
import './AlbumList.css';

class _AlbumList extends React.Component {
    findAuthor(index) {
        const author = this.props.users.filter(user => user.id === index.toString());
        return author[0].username;
    }

    render() {
        return (
            <div className='albums-wrapper'>
                <Switch>
                    <Route exact path='/albums'>
                        {this.props.albums.map((album, index) => (
                            <div className='album' key={index}>
                                <span>
                                    {this.findAuthor(album.userId)}
                                </span>
                                <span>
                                    {album.title}
                                </span>
                                <Link to={`/albums/${album.id}`}>
                                    <img src='https://via.placeholder.com/150/92c952' alt='Whoops'/>
                                </Link>
                            </div>
                        ))}
                    </Route>
                    <Route path={`/albums/${this.props.currentAlbum.id}`}>
                        {this.props.photos.filter(photo => photo.albumId === 1) // temp
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

export const AlbumList = connect(mapStateToProps)(_AlbumList);
