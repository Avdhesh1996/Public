import React, { useState } from 'react';
import './TicketBooking.css'; 
import { FaTimes } from 'react-icons/fa';

const TicketBooking = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = (e) => 
    {
        e.preventDefault();
        props.toggle();
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                    <div className="close-btn" onClick={props.toggle}><FaTimes /></div> 
                    <h2>{props.movieTitle}</h2> 
                <form onSubmit={handleLogin}>

                    <label>
                        Name :
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                   
                    <label>
                        Mobile No :
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>

                    <label>
                        Email Id :
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>

                    <button type="submit">Book Tickets</button>

                </form>
             
            </div>
        </div>
    );
};

export default TicketBooking;
