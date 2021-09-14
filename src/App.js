import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import { setSearchField, requestUsers } from './actions.js'

import './App.css';

const mapStateToProps = state => {
  return {
    searchText: state.searchUsers.searchText,
    isPending: state.fetchUsers.isPending,
    users: state.fetchUsers.users,
    errorMessage: state.fetchUsers.errorMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: (e) => dispatch(setSearchField(e.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestUsers()
  }

  render() {
    const { searchText, changeSearchText, isPending, users, errorMessage } = this.props;


    const filteredUsers = users.filter(user =>
      (user.name.first.toLowerCase().includes(searchText.toLowerCase()) || user.name.last.toLowerCase().includes(searchText.toLowerCase()))
    );


    return (
      <div className="App" >
        <SearchBox placeholder={"Search User"} changeSearchText={changeSearchText} />
        {isPending ? <span>loading...</span> :
          <CardList userList={filteredUsers} />}
        {errorMessage && <span>{errorMessage}</span>}
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
