import React, { useState } from 'react';
import { SearchIcon, MenuIcon, XIcon } from 'lucide-react';
interface HeaderProps {
  onSearch: (query: string) => void;
}
export function Header({
  onSearch
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  return <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-red-600">Streamix</h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-red-500 transition">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition">
              Movies
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition">
              TV Shows
            </a>
            <a href="#" className="text-gray-300 hover:text-red-500 transition">
              My List
            </a>
          </nav>
          {/* Search */}
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input type="text" placeholder="Search movies..." className="bg-gray-800 text-white px-4 py-1 rounded-full pr-8 focus:outline-none focus:ring-2 focus:ring-red-500" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <SearchIcon size={18} />
              </button>
            </form>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400 hover:text-white focus:outline-none">
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && <div className="md:hidden py-4">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input type="text" placeholder="Search movies..." className="bg-gray-800 text-white w-full px-4 py-2 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-red-500" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <SearchIcon size={18} />
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <a href="#" className="block text-white hover:text-red-500 transition py-2">
                Home
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-500 transition py-2">
                Movies
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-500 transition py-2">
                TV Shows
              </a>
              <a href="#" className="block text-gray-300 hover:text-red-500 transition py-2">
                My List
              </a>
            </div>
          </div>}
      </div>
    </header>;
}