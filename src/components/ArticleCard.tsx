import React from 'react';
import { Article } from '../data/articles';
import { Bookmark, Share2 } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onRead: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (e: React.MouseEvent, article: Article) => void;
  onShare: (e: React.MouseEvent, article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onRead,
  isBookmarked,
  onToggleBookmark,
  onShare,
}) => {
  return (
    <article
      onClick={() => onRead(article)}
      className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6 pb-6 border-b border-gray-200 group cursor-pointer transition hover:bg-gray-50/60 p-2 sm:p-2 -mx-2 rounded-sm"
    >
      <div className="flex-1 pr-2">
        <h2 className="headline-font text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#002663] transition">
          <a
            href={`#article-${article.id}`}
            onClick={(e) => {
              e.preventDefault();
              onRead(article);
            }}
          >
            {article.title}
          </a>
        </h2>

        <div className="mt-3 flex items-center justify-between text-xs text-gray-500 font-sans">
          <div className="flex items-center space-x-2">
            <time dateTime={article.dateTime}>{article.timeAgo}</time>
            {article.category && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600 font-medium">{article.category}</span>
              </>
            )}
          </div>

          {/* Quick Action Icons */}
          <div className="flex items-center space-x-3 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            <button
              onClick={(e) => onToggleBookmark(e, article)}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark article'}
              className={`p-1 rounded hover:bg-gray-200/80 transition cursor-pointer ${
                isBookmarked ? 'text-[#002663]' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>
            <button
              onClick={(e) => onShare(e, article)}
              title="Share article"
              className="p-1 rounded text-gray-500 hover:text-gray-800 hover:bg-gray-200/80 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[240px] h-[160px] flex-shrink-0 overflow-hidden bg-gray-100 rounded-sm relative">
        <img
          src={article.imageUrl}
          alt={article.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        {article.readTime && (
          <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-xs font-mono">
            {article.readTime}
          </span>
        )}
      </div>
    </article>
  );
};
