import Card from './Components/Card'
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users_data: [],
      loading: true
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then(response => response.json())
      .then((users) => {
        this.setState({
          users_data: users.data,
          loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">LGMVIP Web Task-2</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <button onClick={this.updateState} class="btn btn-outline-danger">Get Users</button>
            </div>
          </div>
        </nav>
        <Card loading={this.state.loading} users={this.state.users_data} />
     </>
    )
  }
}
export default App;