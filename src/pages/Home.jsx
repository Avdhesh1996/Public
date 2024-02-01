import React, { useState, useEffect } from 'react';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => 
  {
    try 
    {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      const filteredShows = data.filter(show => show.show.image?.medium);
      setShows(filteredShows);
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  };

  return (
    <div>
      <h2>Popular Shows</h2>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.show.id}>
            <div className="card">
              <img src={show.show.image.medium} className="card-img-top" alt={show.show.name} />
              <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                <a href={`/show/${show.show.id}`} className="btn btn-primary">View Summary</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

