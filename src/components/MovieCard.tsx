import React from 'react';
import { PlayIcon, DownloadIcon, StarIcon } from 'lucide-react';
export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  year: number;
  genre: string;
  watchUrl: string;
  downloadUrl: string;
}
interface MovieCardProps {
  movie: Movie;
}
export function MovieCard({
  movie
}: MovieCardProps) {
  return <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={movie.imageUrl} alt={`${movie.title} poster`} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full px-2 py-1 flex items-center">
          <StarIcon size={14} className="text-yellow-400 mr-1" />
          <span className="text-sm">{movie.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1 truncate">{movie.title}</h3>
        <div className="text-gray-400 text-xs mb-2">
          <span>{movie.year}</span> • <span>{movie.genre}</span>
        </div>
        <div className="flex space-x-1">
          <a href={movie.watchUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 hover:bg-red-700 text-white py-1.5 rounded text-sm flex items-center justify-center transition">
            <PlayIcon size={14} className="mr-1" />
            Watch
          </a>
          <a href={movie.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-1.5 rounded text-sm flex items-center justify-center transition">
            <DownloadIcon size={14} className="mr-1" />
            Download
          </a>
        </div>
      </div>
    </div>;
}