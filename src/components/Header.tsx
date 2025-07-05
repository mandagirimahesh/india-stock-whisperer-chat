import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, Bell, User, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { categories, articles } from '../data/mockData';
import { trackSearch, trackNewsletterSignup, trackCategoryView } from '../utils/analytics';
import AdBanner from './AdBanner';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Main navigation categories (first 4)
  const mainCategories = categories.slice(0, 4);
  // Additional categories for dropdown
  const additionalCategories = categories.slice(4);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5);
      
      setSearchResults(filteredArticles);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      trackSearch(searchQuery);
      setShowSearchResults(false);
      setIsSearchOpen(false);
      // Navigate to search results page (you can implement this)
      console.log('Searching for:', searchQuery);
    }
  };

  const handleSearchResultClick = (articleId: string) => {
    setShowSearchResults(false);
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/article/${articleId}`);
  };

  const handleCategoryClick = (categoryName: string) => {
    trackCategoryView(categoryName);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleNewsletterSignup = () => {
    trackNewsletterSignup('header_cta');
  };

  return (
    <>
      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="font-bold mr-2">BREAKING:</span>
          <span className="text-sm md:text-base">
            Global Economic Summit reaches historic climate agreement
          </span>
        </div>
      </div>

      {/* Header Ad Banner */}
      {/* <div className="bg-gray-100 py-2">
        <div className="max-w-6xl mx-auto px-4">
          <AdBanner placement="header" />
        </div>
      </div> */}

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-serif text-2xl font-bold text-gray-900">NewsHubPro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 mx-8 flex-1 justify-center">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              
              {/* Main Categories */}
              {mainCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  onClick={() => handleCategoryClick(category.name)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              ))}

              {/* More Categories Dropdown */}
              {additionalCategories.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    More
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {additionalCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.slug}`}
                          onClick={() => handleCategoryClick(category.name)}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <Link
                          to="/about"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          About
                        </Link>
                        <Link
                          to="/contact"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                    <form onSubmit={handleSearch} className="relative">
                      <input
                        type="text"
                        placeholder="Search news..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        autoFocus
                      />
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700 transition-colors"
                      >
                        Search
                      </button>
                    </form>
                    
                    {/* Search Results */}
                    {showSearchResults && searchResults.length > 0 && (
                      <div className="mt-4 border-t border-gray-200 pt-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Search Results</h4>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {searchResults.map((article) => (
                            <button
                              key={article.id}
                              onClick={() => handleSearchResultClick(article.id)}
                              className="w-full text-left p-2 hover:bg-gray-50 rounded transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                {article.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {article.category.name} • {article.readTime} min read
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {showSearchResults && searchResults.length === 0 && searchQuery.length > 2 && (
                      <div className="mt-4 border-t border-gray-200 pt-4">
                        <p className="text-sm text-gray-500">No results found for "{searchQuery}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <button 
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="User account"
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNewsletterSignup}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700 transition-colors"
              >
                Search
              </button>
            </form>
            
            {/* Mobile Search Results */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Search Results</h4>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {searchResults.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => handleSearchResultClick(article.id)}
                      className="w-full text-left p-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900 line-clamp-2">
                        {article.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {article.category.name} • {article.readTime} min read
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/about"
                className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => {
                    handleNewsletterSignup();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;