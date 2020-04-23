
import React from 'react'

 const Message = ({text, name, time, currentUser}) => {

     let isSentByCurrentUser = false;
     const trimmedName = currentUser.trim().toLowerCase();

     if ( name === trimmedName ) {
         isSentByCurrentUser = true;
     }
     return (
         isSentByCurrentUser ? (
            <React.Fragment>
            <p className="meta">{name} <span>{time}</span></p>
            <p className="text">
            {text }
                 </p>
         </React.Fragment>
         )
             : (
                <React.Fragment>
                <p className="meta">{name} <span>{time}</span></p>
                <p className="text" style={{color: 'blue'}}>{text }</p>
             </React.Fragment>
             )
     
    )
}

export default Message
