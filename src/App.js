import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {AlbumList} from './components/AlbumList/AlbumList';
import {UserList} from './components/UserList/UserList';
import {FormUser} from './components/FormUser/FormUser';
import {connect} from 'react-redux';
import {fetchData, TOKEN_USERS, TOKEN_ALBUMS, TOKEN_PHOTOS} from './store/actions';
import './App.css';

class _App extends React.Component {
    componentDidMount() {
        this.props.getData(TOKEN_USERS);
        this.props.getData(TOKEN_ALBUMS);
        this.props.getData(TOKEN_PHOTOS);
    }

    render() {
        return (
            <div className='wrapper'>
                <nav>
                    <Link to='/albums'>Albums</Link>
                    <Link to='/users'>Users</Link>
                </nav>
                <Switch>
                    <Route path='/albums'>
                        <AlbumList />
                    </Route>
                    <Route path='/users'>
                        <UserList />
                    </Route>
                    <Route path='/crud'>
                        <FormUser />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const App = connect(null, {
    getData: fetchData,
})(_App);

export default App;
