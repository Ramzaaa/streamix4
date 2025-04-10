import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { MovieGrid } from './components/MovieGrid';
import { Pagination } from './components/Pagination';
import { movieData } from './data/movieData';
export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 40; // Show 40 movies per page
  // Filter movies based on search query
  const filteredMovies = searchQuery ? movieData.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())) : movieData;
  // Calculate total pages needed (simulate 100 pages of content)
  const totalPages = 100; // Set to 100 pages
  // Calculate pagination for current page
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = filteredMovies.slice(startIndex, startIndex + moviesPerPage);
  // Reset to first page when searching
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  return <div className="bg-gray-900 text-white min-h-screen">
      <Header onSearch={handleSearch} />
      <main>
        <HeroBanner />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Movies'}
          </h2>
          <MovieGrid movies={currentMovies} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </main>
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© 2025 Streamix. All rights reserved.</p>
        </div>
      </footer>
    </div>;
}