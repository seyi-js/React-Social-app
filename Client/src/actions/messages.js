import {GET_MESSAGES, GET_ROOM_USERS} from './types'
import io from 'socket.io-client';

let socket;

const ENDURL = '/' 


export const joinUser = ({name, room}) => {
    socket = io( ENDURL );
    socket.emit( 'join', { name, room } );
    
}
export const getMessages = () => dispatch =>{
    socket.on( 'message', message => dispatch( {
        type: GET_MESSAGES,
        payload: message
    }))	
}

export const getRoomUsers = () => dispatch => {
    socket.on( 'roomUsers', ( { room, users } ) => dispatch( {
        type: GET_ROOM_USERS,
        payload:{room, users}
    }))
}

export const sendChat = (message) => {
    socket.emit('chatMessage', message)
}

