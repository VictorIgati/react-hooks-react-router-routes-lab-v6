// src/pages/Movie.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(r => r.json())
      .then(movieData => setMovie(movieData));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index} style={{ marginRight: '10px' }}>
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;