// src/components/Homepage.js
import React from 'react';
import MovieCard from './MovieCard';

const Homepage = ({ movies, addToWishlist }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} addToWishlist={addToWishlist} />
      ))}
    </div>
  );
};

export default Homepage;
