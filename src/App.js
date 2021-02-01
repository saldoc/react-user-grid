import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=15")
      .then(response => response.json())
      .then(users => this.setState({ users: users.results }))
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { users, searchText } = this.state;
    const filteredUsers = users.filter(user =>
      (user.name.first.toLowerCase().includes(searchText.toLowerCase()) || user.name.last.toLowerCase().includes(searchText.toLowerCase()))
    );
    return (
      <div className="App" >
        <SearchBox placeholder={"Search User"} handleChange={(e) => this.handleChange(e)} />
        <CardList userList={filteredUsers} />
      </div >
    );
  }
}

export default App;
