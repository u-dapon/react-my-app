import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList.js';


class App extends Component {
  state = {
    friendList:[
      { id: 1,
        name:"Taro"
      },
      {
        id: 2,
        name:"Masa"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendList friendList ={ this.state.friendList } />
        </header>
      </div>
    );
  }
}

export default App;
