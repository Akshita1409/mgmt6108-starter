/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LeaderboardAd } from './components/LeaderboardAd';
import { Header } from './components/Header';
import { TopicHeader } from './components/TopicHeader';
import { ArticleCard } from './components/ArticleCard';
import { SidebarAd } from './components/SidebarAd';
import { TrendingSection } from './components/TrendingSection';
import { NewsletterBox } from './components/NewsletterBox';
import { ArticleModal } from './components/ArticleModal';
import { MenuDrawer } from './components/MenuDrawer';
import { AuthModal } from './components/AuthModal';
import { AdModal } from './components/AdModal';
import { Footer } from './components/Footer';
import { INITIAL_ARTICLES, MORE_ARTICLES, TRENDING_ARTICLES, Article } from './data/articles';
import { Loader2, Check, BellRing } from 'lucide-react';

const CATEGORIES = [
  'All Stories',
  'Culture & Tech',
  'Start-ups',
  'Energy & Infrastructure',
  'Policy & Geopolitics',
  'Business & M&A',
  'Analysis & Society',
];

export default function App() {
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [loadedMoreCount, setLoadedMoreCount] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set(['andrew-garfield-openai-film']));
  const [isFollowingTopic, setIsFollowingTopic] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'auth' | 'bookmarks'>('auth');
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const handleToggleBookmark = (e: React.MouseEvent | undefined, article: Article) => {
    if (e) e.stopPropagation();
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(article.id)) {
        next.delete(article.id);
        showToast(`Removed "${article.title.slice(0, 32)}..." from saved stories`);
      } else {
        next.add(article.id);
        showToast(`Saved "${article.title.slice(0, 32)}..." to your reading list`);
      }
      return next;
    });
  };

  const handleShare = (e?: React.MouseEvent, article?: Article) => {
    if (e) e.stopPropagation();
    const art = article || selectedArticle;
    if (!art) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!');
    } else {
      showToast('Sharing article: ' + art.title);
    }
  };

  const handleToggleFollow = () => {
    setIsFollowingTopic((prev) => {
      const next = !prev;
      if (next) {
        showToast('Now following "AI/artificial intelligence". You will receive key updates.');
      } else {
        showToast('Unfollowed "AI/artificial intelligence".');
      }
      return next;
    });
  };

  const handleLoadMore = () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);

    setTimeout(() => {
      if (loadedMoreCount < MORE_ARTICLES.length) {
        const nextBatch = MORE_ARTICLES.slice(loadedMoreCount, loadedMoreCount + 3);
        setArticles((prev) => [...prev, ...nextBatch]);
        setLoadedMoreCount((prev) => prev + nextBatch.length);
        showToast(`Loaded ${nextBatch.length} more technology stories.`);
      } else {
        // Generate additional realistic simulated stories
        const generated: Article = {
          id: `ai-story-${Date.now()}`,
          title: 'Southeast Asian tech hubs see record surge in venture funding for sovereign AI models',
          timeAgo: '1 day ago',
          dateTime: 'P1D',
          imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80',
          imageAlt: 'Digital matrix data network code',
          category: 'Start-ups',
          author: 'Grace Ho',
          authorRole: 'Senior Business Correspondent',
          location: 'SINGAPORE',
          readTime: '4 min read',
          summary: 'Institutional investors pour over US$1.2 billion into localized language model startups across ASEAN.',
          content: [
            'SINGAPORE – Sovereign artificial intelligence infrastructure has emerged as the definitive growth sector for regional venture capital.',
            'Leading the charge are clusters of enterprise software providers adapting open foundation architectures for regional commerce, banking, and governance across Bahasa, Thai, and Tagalog languages.'
          ]
        };
        setArticles((prev) => [...prev, generated]);
        showToast('Loaded latest archive reporting.');
      }
      setIsLoadingMore(false);
    }, 600);
  };

  // Filtered articles
  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === 'All Stories' || art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      !searchQuery ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const bookmarkedArticlesList = [
    ...articles,
    ...MORE_ARTICLES,
    ...TRENDING_ARTICLES,
  ].filter((a, index, self) => 
    bookmarkedIds.has(a.id) && self.findIndex(t => t.id === a.id) === index
  );

  return (
    <div className="bg-white text-gray-900 font-sans antialiased min-h-screen flex flex-col selection:bg-blue-100 selection:text-[#002663]">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002663] text-white text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-xl flex items-center space-x-2 animate-in fade-in slide-in-from-bottom-2 duration-200 border border-blue-800">
          <BellRing className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* BEGIN: TopLeaderboardAd */}
      <LeaderboardAd onLearnMore={() => setIsAdModalOpen(true)} />
      {/* END: TopLeaderboardAd */}

      {/* BEGIN: MainHeader */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenAuth={() => {
          setAuthModalTab('auth');
          setIsAuthModalOpen(true);
        }}
        savedCount={bookmarkedIds.size}
        onOpenBookmarks={() => {
          setAuthModalTab('bookmarks');
          setIsAuthModalOpen(true);
        }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        user={user}
      />
      {/* END: MainHeader */}

      {/* BEGIN: TopicHeader */}
      <TopicHeader
        isFollowing={isFollowingTopic}
        onToggleFollow={handleToggleFollow}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categories={CATEGORIES}
      />
      {/* END: TopicHeader */}

      {/* BEGIN: MainContent */}
      <main className="flex-grow max-w-[1240px] w-full mx-auto px-4 py-8">
        {searchQuery && (
          <div className="mb-6 p-3 bg-gray-50 border border-gray-200 rounded flex items-center justify-between text-xs text-gray-700">
            <span>
              Showing results for <strong className="text-gray-900">"{searchQuery}"</strong> ({filteredArticles.length} found)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#002663] hover:underline font-semibold cursor-pointer"
            >
              Reset search
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: News Editorial Feed (approx 8 of 12 cols) */}
          <section className="lg:col-span-8 space-y-6" data-purpose="news-feed">
            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 border border-dashed border-gray-200 rounded-sm">
                <p className="headline-font text-lg text-gray-600">No matching articles found</p>
                <p className="text-xs text-gray-400 mt-1">Try clearing your search filters or selecting another category.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Stories');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-1.5 text-xs font-semibold bg-[#002663] text-white rounded-full hover:bg-[#0b2046] transition cursor-pointer"
                >
                  View All AI Stories
                </button>
              </div>
            ) : (
              filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onRead={(art) => setSelectedArticle(art)}
                  isBookmarked={bookmarkedIds.has(article.id)}
                  onToggleBookmark={(e, art) => handleToggleBookmark(e, art)}
                  onShare={(e, art) => handleShare(e, art)}
                />
              ))
            )}

            {/* Load More Section */}
            <div className="pt-8 flex justify-center" data-purpose="load-more-container">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="px-8 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-gray-100 hover:border-gray-400 transition tracking-wide shadow-xs cursor-pointer flex items-center space-x-2 disabled:opacity-60"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#002663]" />
                    <span>Loading more articles...</span>
                  </>
                ) : (
                  <span>Load more</span>
                )}
              </button>
            </div>
          </section>

          {/* Right Column: Sidebar with Commercial Unit & Related (4 of 12 cols) */}
          <aside className="lg:col-span-4 space-y-8" data-purpose="sidebar">
            {/* Display Ad: KrisFlyer Medium Rectangle */}
            <SidebarAd onLearnMore={() => setIsAdModalOpen(true)} />

            {/* Trending in AI Section */}
            <TrendingSection
              articles={TRENDING_ARTICLES}
              onRead={(art) => setSelectedArticle(art)}
            />

            {/* Newsletter Subscription Box */}
            <NewsletterBox />
          </aside>
        </div>
      </main>
      {/* END: MainContent */}

      {/* BEGIN: SiteFooter */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }}
      />
      {/* END: SiteFooter */}

      {/* Interactive Modals */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          isBookmarked={bookmarkedIds.has(selectedArticle.id)}
          onToggleBookmark={() => handleToggleBookmark(undefined, selectedArticle)}
          onShare={() => handleShare(undefined, selectedArticle)}
          onSelectArticle={(art) => setSelectedArticle(art)}
          relatedArticles={articles.filter((a) => a.id !== selectedArticle.id)}
        />
      )}

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          showToast(`Filtered stories by "${cat}"`);
        }}
        onOpenBookmarks={() => {
          setAuthModalTab('bookmarks');
          setIsAuthModalOpen(true);
        }}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        user={user}
        onLogin={(name, email) => {
          setUser({ name, email });
          setIsAuthModalOpen(false);
          showToast(`Welcome back, ${name}! Logged into Straits Times account.`);
        }}
        onLogout={() => {
          setUser(null);
          setIsAuthModalOpen(false);
          showToast('Signed out of Straits Times account.');
        }}
        bookmarkedArticles={bookmarkedArticlesList}
        onRemoveBookmark={(id) => {
          setBookmarkedIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
          showToast('Bookmark removed.');
        }}
        onReadArticle={(art) => setSelectedArticle(art)}
        isFollowingTopic={isFollowingTopic}
        initialTab={authModalTab}
      />

      <AdModal
        isOpen={isAdModalOpen}
        onClose={() => setIsAdModalOpen(false)}
      />
    </div>
  );
}
