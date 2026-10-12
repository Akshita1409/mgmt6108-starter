import React, { useState } from 'react';
import { X, Bookmark, User, CheckCircle, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../data/articles';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; email: string } | null;
  onLogin: (name: string, email: string) => void;
  onLogout: () => void;
  bookmarkedArticles: Article[];
  onRemoveBookmark: (articleId: string) => void;
  onReadArticle: (article: Article) => void;
  isFollowingTopic: boolean;
  initialTab?: 'auth' | 'bookmarks';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  user,
  onLogin,
  onLogout,
  bookmarkedArticles,
  onRemoveBookmark,
  onReadArticle,
  isFollowingTopic,
  initialTab = 'auth',
}) => {
  const [activeTab, setActiveTab] = useState<'auth' | 'bookmarks'>(initialTab);
  const [name, setName] = useState('Akshita');
  const [email, setEmail] = useState('akshita.giis@gmail.com');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onLogin(name, email);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl overflow-hidden border border-gray-200">
        {/* Header Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-gray-50/70">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('auth')}
              className={`text-sm font-bold pb-1 cursor-pointer transition ${
                activeTab === 'auth'
                  ? 'text-[#002663] border-b-2 border-[#002663]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {user ? 'My ST Account' : 'Log In / Sign Up'}
            </button>
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`text-sm font-bold pb-1 cursor-pointer transition flex items-center space-x-1.5 ${
                activeTab === 'bookmarks'
                  ? 'text-[#002663] border-b-2 border-[#002663]'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <span>Saved Articles</span>
              <span className="bg-gray-200 text-gray-700 text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                {bookmarkedArticles.length}
              </span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === 'auth' ? (
            user ? (
              /* Profile View */
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-[#002663] text-white flex items-center justify-center text-lg font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{user.name}</h3>
                    <p className="text-xs text-gray-600">{user.email}</p>
                    <div className="mt-1 flex items-center space-x-1.5 text-xs text-emerald-700 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>ST All-Digital Subscriber</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-gray-600 border-t border-b border-gray-100 py-3">
                  <div className="flex justify-between py-1">
                    <span>Followed Topic:</span>
                    <span className="font-medium text-gray-900">
                      {isFollowingTopic ? 'AI/artificial intelligence (Active)' : 'None'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Bookmarked Stories:</span>
                    <span className="font-medium text-gray-900">{bookmarkedArticles.length}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Edition Preference:</span>
                    <span className="font-medium text-gray-900">Singapore Edition</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    onClick={() => setActiveTab('bookmarks')}
                    className="text-xs text-[#002663] font-semibold hover:underline flex items-center space-x-1"
                  >
                    <span>View saved reading list</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={onLogout}
                    className="text-xs text-red-600 hover:text-red-800 font-medium px-3 py-1.5 rounded border border-red-200 hover:bg-red-50 transition cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              /* Sign In / Sign Up Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <div className="logo-font text-[#002663] text-2xl font-bold uppercase mb-1">
                    THE STRAITS TIMES
                  </div>
                  <p className="text-xs text-gray-500">
                    Sign in to customize topics, save articles, and receive personalized tech alerts.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#002663] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#002663] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#002663] hover:bg-[#0b2046] text-white text-xs sm:text-sm font-semibold py-2.5 rounded transition cursor-pointer shadow-sm"
                >
                  {isSubmitting ? 'Signing In...' : 'Continue with Straits Times ID'}
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  By continuing, you agree to SPH Media's Terms &amp; Conditions and Privacy Policy.
                </p>
              </form>
            )
          ) : (
            /* Bookmarks Tab */
            <div className="space-y-4">
              {bookmarkedArticles.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Bookmark className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-700">No saved articles yet</p>
                  <p className="text-[11px] text-gray-400 mt-1 max-w-xs mx-auto">
                    Click the bookmark icon on any AI news card or inside an article to save it for reading later.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {bookmarkedArticles.map((art) => (
                    <div
                      key={art.id}
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded border border-gray-200 flex items-start justify-between gap-3 group transition"
                    >
                      <div
                        onClick={() => {
                          onReadArticle(art);
                          onClose();
                        }}
                        className="flex-1 cursor-pointer"
                      >
                        <h4 className="headline-font font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#002663] line-clamp-2">
                          {art.title}
                        </h4>
                        <div className="text-[11px] text-gray-500 mt-1 flex items-center space-x-2">
                          <span>{art.timeAgo}</span>
                          <span>•</span>
                          <span>{art.category}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveBookmark(art.id)}
                        className="p-1 text-gray-400 hover:text-red-600 rounded transition cursor-pointer"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
