import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import { setSearchField } from './actions.js'

import './App.css';

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: (e) => dispatch(setSearchField(e.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=15")
      .then(response => response.json())
      .then(users => this.setState({ users: users.results }))
  }

  render() {
    const { users } = this.state;
    const { searchText, changeSearchText } = this.props;
    const filteredUsers = users.filter(user =>
      (user.name.first.toLowerCase().includes(searchText.toLowerCase()) || user.name.last.toLowerCase().includes(searchText.toLowerCase()))
    );
    return (
      <div className="App" >
        <SearchBox placeholder={"Search User"} changeSearchText={changeSearchText} />
        <CardList userList={filteredUsers} />
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
