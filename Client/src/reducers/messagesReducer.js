import {GET_MESSAGES, GET_ROOM_USERS } from '../actions/types'

const initialState = {
    messages: [],
    roomUsers: [],
    room: ''
    
      
}
  

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_MESSAGES:
            return {
                ...state,
                messages:[...state.messages, action.payload]
            };
        case GET_ROOM_USERS:
            return {
                ...state,
                roomUsers: action.payload.users,
                room: action.payload.room
            }
        default:
            return state
    }
}