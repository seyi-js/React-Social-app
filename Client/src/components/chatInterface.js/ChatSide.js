import React from 'react'
import ChatBoard from './ChatBoard'
import ScrollToBottom from 'react-scroll-to-bottom'
const ChatSide = ({messages, roomUsers, room, currentUser}) => {
  return (
   
        <main className="chat-main">
        <div className="chat-sidebar">
          <h3><i className="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name">{room}</h2>
          <h3><i className="fas fa-users"></i> Users</h3>
        <ul id="users">
       
            { roomUsers.map( ( user, i ) => <li key={ i }>{ user.name }</li> ) }
           
          </ul>
        </div>
        
        <ChatBoard messages={ messages } currentUser={currentUser} />
        
      </main>
     
    )
}

export default ChatSide