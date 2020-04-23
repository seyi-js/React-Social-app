import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Join = () => {
    const [ name, setName ] = useState( '' );
    const [room, setRoom] = useState('JavaScript')
    return (
        <div className="join-container">
        <header className="join-header">
            <h1><i className="fas fa-smile"></i>iTweetJs</h1>
        </header>
        <main className="join-main">
            <form>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter username..."
                            required
                            onChange={ (e)=> setName(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="room">Room</label>
                    <select name="room" id="room" onChange={(e)=> setRoom(e.target.value)}>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">NextJs</option>
                        <option value="PHP">VueJs</option>
                        <option value="C#">NodeJs</option>
                        <option value="Ruby">ExpressJs</option>
                        <option value="Java">GatsbyJs</option>
                    </select>
                    </div>
                    <Link  to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="btn">Join Chat</button>
                    </Link>
               
            </form>
        </main>
    </div>
    )
}


export default Join