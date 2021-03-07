import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {AlbumList} from './components/AlbumList/AlbumList';
import {UserList} from './components/UserList/UserList';
import {FormUser} from './components/FormUser/FormUser';
import './App.css';
import {ButtonGroup, Button} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';
import {fetchData, TOKEN_USERS} from './store/fetchedData';

class _App extends React.Component {
    componentDidMount() {
        this.props.getUsers(TOKEN_USERS);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container style={{ backgroundColor: '#cfe8fc', height: '100vh', overflow: 'auto' }}>
                    <nav>
                        <ButtonGroup variant='contained' color='primary' aria-label='outlined primary button group'>
                            <Button component={Link} to='/albums'>Albums</Button>
                            <Button component={Link} to='/users'>Users</Button>
                        </ButtonGroup>
                    </nav>
                    <Switch>
                        <Route path='/albums'>
                            <AlbumList users={this.props.users} />
                        </Route>
                        <Route path='/users'>
                            <UserList />
                        </Route>
                        <Route path='/crud'>
                            <FormUser />
                        </Route>
                    </Switch>
                </Container>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.fetchedData.users,
    }
}

const App = connect(mapStateToProps, {getUsers: fetchData})(_App);
export default App;
