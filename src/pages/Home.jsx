// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(r => r.json())
      .then(moviesData => setMovies(moviesData));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
