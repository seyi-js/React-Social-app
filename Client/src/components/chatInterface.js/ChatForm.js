import React, {useState} from 'react'

const ChatForm = ( { sendMessage } ) => {
   const [message, setMessage] = useState('')
    return (
        <div className="chat-form-container">
        <form id="chat-form" onSubmit={ ( e ) => { sendMessage( { e, message } ); setMessage('')}}>
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            value={message}
            autoComplete="off"
           onChange={(e)=> setMessage(e.target.value)}
           
          />
          <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    )
}



export default ChatForm