const express = require( 'express' );
const path = require( 'path' )
const app = express();
const http = require( 'http' ).createServer( app );
const PORT = process.env.PORT || 2000
const socket = require( 'socket.io' )
const io = socket( http );
const router = require( './routes/router' )
const {userJoin, getCurrentUser, getRoomUsers, userLeavesChat} =require('./utils/users') 
const formatMessage = require( './utils/messages' )

const botName = 'iTweetJs Bot'

if(process.env.NODE_ENV === 'production'){
    //set static
    app.use(express.static('Client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Client/build', 'index.html'));
    })
}


io.on( 'connection', socket => {
    
    
//New user Join
    socket.on( 'join', ( { name, room }) => {
        const user = userJoin( socket.id, name, room )
        socket.join( user.room );
             // Welcome Current User
            socket.emit( 'message', formatMessage( botName, 'Welcome to iTweet!' ) );
            

            
        //when user connects
        socket.broadcast.to( user.room ).emit( 'message', formatMessage( botName, `${ user.name } has joined the chat` ) );

        //Send Users and Room info

        io.to( user.room ).emit( 'roomUsers', {
            room: user.room,
            users: getRoomUsers( user.room )
        } )
            
        
            
        
        
       
    } )
    
     //Get Chat Message

     socket.on( 'chatMessage', (msg) => {
        const user = getCurrentUser( socket.id );
         io.to( user.room ).emit( 'message', formatMessage( user.name, msg ) );

        
    } )

    //Disconnect
    socket.on( 'disconnect', () => {
        const user = userLeavesChat( socket.id )
        if ( user ) {
            io.to( user.room ).emit( 'message', formatMessage( botName, `${ user.name } has left the chat` ) );

            //Send Users and Room info

            io.to( user.room ).emit( 'roomUsers', {
                room: user.room,
                users: getRoomUsers( user.room )
            } )
        }

    } )
})


app.use(router)




http.listen( PORT, () => console.log( `Server Started on port ${ PORT }` ) )