import React from 'react';
import { Search, Bookmark, X } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenAuth: () => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  user: { name: string; email: string } | null;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenAuth,
  savedCount,
  onOpenBookmarks,
  searchQuery,
  setSearchQuery,
  isSearchOpen,
  setIsSearchOpen,
  user,
}) => {
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-40 shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo & Subtitle */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="logo-font text-[#002663] text-2xl md:text-3xl font-extrabold tracking-tight hover:opacity-95 uppercase flex items-center select-none"
          >
            THE STRAITS TIMES
          </a>
        </div>

        {/* Right Header Utilities */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Search Toggle */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1.5 text-gray-700 hover:text-[#002663] hover:bg-gray-100 rounded-full transition cursor-pointer"
            title="Search articles"
            aria-label="Search articles"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Bookmarks Icon */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-1.5 text-gray-700 hover:text-[#002663] hover:bg-gray-100 rounded-full transition cursor-pointer"
            title="Saved articles"
            aria-label="Saved articles"
          >
            <Bookmark className="w-4 h-4" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#002663] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Log in / Sign up */}
          <button
            onClick={onOpenAuth}
            className="flex items-center space-x-2 text-gray-800 hover:text-[#002663] text-sm font-medium cursor-pointer transition py-1"
          >
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#002663] text-white flex items-center justify-center text-xs font-bold">
                  {user.name.charAt(0)}
                </div>
                <span className="hidden sm:inline text-xs font-semibold max-w-[110px] truncate">
                  {user.name}
                </span>
              </div>
            ) : (
              <>
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
                <span className="hidden sm:inline">Log in / sign up for free</span>
              </>
            )}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={onOpenMenu}
            className="flex items-center space-x-1.5 text-gray-800 hover:text-[#002663] text-sm font-semibold pl-3 sm:pl-4 border-l border-gray-200 cursor-pointer transition py-1"
            type="button"
          >
            <svg
              className="w-5 h-5 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {isSearchOpen && (
        <div className="border-t border-gray-200 bg-gray-50 px-4 py-2.5 transition">
          <div className="max-w-[1240px] mx-auto flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across AI & Tech stories..."
              className="w-full text-sm bg-transparent outline-none border-none focus:ring-0 placeholder-gray-400 text-gray-800"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-gray-500 hover:text-gray-800 px-2 py-0.5"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 text-gray-500 hover:text-gray-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
