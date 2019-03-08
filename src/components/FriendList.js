import React, { Component } from 'react';

class FriendList extends Component {
  render() {
    return (
      <div>
        <h1>Your Friend List</h1>
        <p>{this.props.friendList.map((friendList)=>{
            return(
              <p style={ friendListNameStyle }>{ friendList.name }</p>
            )
          })}</p>
      </div>
    );
  }
}

const friendListNameStyle = {
  backgroundColor: "white",
  padding: "12px",
  color: "#282c34",
  cursor: "pointer",
  userSelect: "none",
  margin: "8px",
  fontWeight: "bold"
}

export default FriendList;
