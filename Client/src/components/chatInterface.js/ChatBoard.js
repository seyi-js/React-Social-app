import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

const ChatBoard = ({messages, currentUser}) => {

    
   
    return (

        
        <React.Fragment>
            
            <div className="chat-messages">
            <ScrollToBottom>
                    { messages.map( ( message, i ) => <div key={ i } className="message"><Message
                       currentUser={currentUser} text={ message.text } name={ message.name } time={ message.time } /></div> ) }
                </ScrollToBottom>
            </div>
            
                
    </React.Fragment>
        
        
    )
}

export default ChatBoard