import React from 'react';
import { Article } from '../data/articles';

interface TrendingSectionProps {
  articles: Article[];
  onRead: (article: Article) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ articles, onRead }) => {
  return (
    <div className="border-t-2 border-[#002663] pt-4" data-purpose="trending-section">
      <h3 className="text-base font-bold text-[#002663] uppercase tracking-wider mb-4">
        Trending in Tech &amp; AI
      </h3>
      <ul className="space-y-4">
        {articles.map((item, idx) => {
          const isLast = idx === articles.length - 1;
          return (
            <li
              key={item.id}
              className={`${!isLast ? 'border-b border-gray-100 pb-3' : 'pb-1'} group cursor-pointer`}
              onClick={() => onRead(item)}
            >
              <a
                href={`#trending-${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onRead(item);
                }}
                className="headline-font font-semibold text-gray-800 group-hover:text-[#002663] text-base leading-snug block transition"
              >
                {item.title}
              </a>
              <span className="block text-xs text-gray-400 mt-1 font-sans">{item.timeAgo}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
