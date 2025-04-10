import React from 'react';
import { MovieCard, Movie } from './MovieCard';
interface MovieGridProps {
  movies: Movie[];
}
export function MovieGrid({
  movies
}: MovieGridProps) {
  if (movies.length === 0) {
    return <div className="text-center py-12">
        No movies found. Try a different search.
      </div>;
  }
  return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>;
}