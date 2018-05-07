import React, { Component } from 'react';
import './App.css';
import PostList from '../containers/PostListData';
import Signup from '../containers/Signup';
import Login from '../containers/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
        <Signup />
        <Login />
      </div>
    );
  }
}

export default App;
