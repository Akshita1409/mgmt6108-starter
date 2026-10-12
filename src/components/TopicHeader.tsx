import React from 'react';
import { Check } from 'lucide-react';

interface TopicHeaderProps {
  isFollowing: boolean;
  onToggleFollow: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: string[];
}

export const TopicHeader: React.FC<TopicHeaderProps> = ({
  isFollowing,
  onToggleFollow,
  selectedCategory,
  onSelectCategory,
  categories,
}) => {
  return (
    <section className="border-b border-gray-200 bg-white" data-purpose="topic-heading-section">
      <div className="max-w-[1240px] mx-auto px-4 py-4">
        {/* Main Title Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            AI/artificial intelligence
          </h1>

          {/* Thin vertical divider */}
          <div className="h-6 w-[1px] bg-gray-300 hidden sm:block"></div>

          {/* Follow Topic Button */}
          <button
            onClick={onToggleFollow}
            className={`inline-flex items-center space-x-1.5 rounded-full px-3.5 py-1 text-sm font-medium transition shadow-xs cursor-pointer ${
              isFollowing
                ? 'bg-[#002663] text-white border border-[#002663] hover:bg-[#0b2046]'
                : 'border border-gray-300 text-gray-800 hover:bg-gray-50 active:bg-gray-100'
            }`}
          >
            <span>{isFollowing ? 'Following' : 'Follow topic'}</span>
            {isFollowing ? (
              <Check className="w-3.5 h-3.5 ml-0.5" />
            ) : (
              <span className="text-base leading-none font-semibold text-gray-500">+</span>
            )}
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-gray-400 font-medium mr-1 uppercase tracking-wider text-[11px] hidden sm:inline">
            Filters:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1 rounded-full font-medium transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#002663] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
