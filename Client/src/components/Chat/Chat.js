import React, { useEffect, useState } from 'react'
import Qs from 'query-string';
import {joinUser, getMessages, getRoomUsers, sendChat} from '../../actions/messages'
import { connect } from 'react-redux';
import store from '../../store'

import ChatSide from '../chatInterface.js/ChatSide'
import ChatForm from '../chatInterface.js/ChatForm'
import ChatHeader from '../chatInterface.js/ChatHeader'


const Chat = ( props ) => {
    const [currentUser, setCurrentUser] =useState('')
    
    
    useEffect( () => {
        const { name, room } = Qs.parse( props.location.search )
        setCurrentUser(name)
        const newUser = {
            name,
            room
        }
        joinUser(newUser)
        
         
    }, [ props.location.search] );

    useEffect( () => {
        store.dispatch( getMessages() )
        store.dispatch( getRoomUsers())
}, [])
    
    const { messages, roomUsers, room } = props.msg;
    // console.log(roomUsers)

    //Send Message

    const sendMessage = ( {e, message}) => {
        e.preventDefault();
        sendChat(message)
    }
    
    
    return (
        <React.Fragment>
            <div className="chat-container">
                <ChatHeader />
                <ChatSide messages={ messages } roomUsers={ roomUsers } room={ room } currentUser={currentUser}/>
                <ChatForm sendMessage={ sendMessage}/>
        </div>    
        </React.Fragment>
    )
} 

const mapStateToProps = ( state ) => ({
    msg: state.msg
})
export default connect(mapStateToProps, {joinUser,getMessages, getRoomUsers, sendChat})(Chat)