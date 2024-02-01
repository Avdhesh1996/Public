import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import TicketBooking from './TicketBooking/TicketBooking';

const ShowSummary = () => {
    const [showDetails, setShowDetails] = useState(null);
    const [showLogin, setShowLogin] = useState(false); 
    const { id } = useParams(); 

    useEffect(() => {
        const fetchShowDetails = async () => 
    {   try 
            {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                setShowDetails(data);

            } 
            
        catch (error) 
            {
                console.error('Error fetching show details:', error);
            }
        };

        fetchShowDetails();
    }, [id]); 

    const toggleLogin = () => 
    {
        setShowLogin(!showLogin);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            {showDetails ? (
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{showDetails.name}</h2>
                    {showDetails.image && (
                        <div>
                          
                            <img src={showDetails.image.medium} alt="Show" />
                        </div>
                    )}
                    <p style={{ fontSize: '18px', lineHeight: '1.6', marginTop: '20px' }}>
                        <strong>About the movie:</strong><br />
                        {showDetails.summary}
                    </p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{ fontSize: '16px' }}>
                                Show Details
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item>
                                <p>Type: {showDetails.type}</p>
                                <p>Language: {showDetails.language}</p>
                                <p>Status: {showDetails.status}</p>
                                <p>Genres: {showDetails.genres.join(', ')}</p>
                                {showDetails.runtime && <p>Runtime: {showDetails.runtime} minutes</p>}
                                <p>Premiered: {showDetails.premiered}</p>
                            </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="btn btn-primary" onClick={ toggleLogin} style={{ fontSize: '16px' }}>
                            Book Ticket
                        </button>
                    </div>
                  
                   
                {showLogin ? <TicketBooking movieTitle={showDetails.name} toggle={toggleLogin} /> : null}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShowSummary;
