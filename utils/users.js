const users = [];


//Join User To Chat

const userJoin = ( id, name, room ) => {
        const user = { id, name, room };
        users.push( user )
        return user


    
}


//Get Current User
const getCurrentUser = ( id ) => {
    return users.find( user => user.id === id );
};

//Remove User
const userLeavesChat = ( id ) => {
    const index = users.findIndex( user => user.id === id );

    if ( index !== -1 ) {
        return users.splice( index, 1 )[0];
    };


    
}

//Get Room users

const getRoomUsers = ( room ) => {
    return users.filter(user=> user.room === room)
    
}

module.exports = {userJoin, getCurrentUser, userLeavesChat, getRoomUsers}