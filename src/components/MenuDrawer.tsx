import React, { useState } from 'react';
import { X, ChevronRight, Newspaper, Headphones, Mail, Bookmark, Globe } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (cat: string) => void;
  onOpenBookmarks: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenBookmarks,
}) => {
  const [edition, setEdition] = useState<'singapore' | 'international'>('singapore');

  if (!isOpen) return null;

  const sections = [
    {
      title: 'Tech & AI',
      highlight: true,
      items: ['Artificial Intelligence', 'Start-ups', 'Big Tech', 'Gadgets', 'Cybersecurity', 'Fintech'],
    },
    {
      title: 'Singapore',
      items: ['Politics', 'Jobs', 'Housing', 'Transport', 'Courts & Crime', 'Education'],
    },
    {
      title: 'Asia',
      items: ['SE Asia', 'East Asia', 'South Asia', 'Australia/NZ'],
    },
    {
      title: 'World',
      items: ['United States', 'Europe', 'Middle East', 'Latin America'],
    },
    {
      title: 'Business',
      items: ['Economy', 'Banking', 'Invest', 'Property', 'Companies'],
    },
    {
      title: 'Opinion',
      items: ['ST Editorial', 'Columnists', 'Forum Letters', 'Cartoons'],
    },
    {
      title: 'Life',
      items: ['Food', 'Culture & Arts', 'Travel', 'Motoring', 'Style'],
    },
    {
      title: 'Sport',
      items: ['Football', 'Formula 1', 'Basketball', 'Tennis'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="logo-font text-[#002663] text-xl font-bold uppercase">
            THE STRAITS TIMES
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Edition Switcher */}
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-1.5 text-gray-600 font-medium">
            <Globe className="w-3.5 h-3.5" />
            <span>Edition:</span>
          </div>
          <div className="flex bg-white rounded border border-gray-300 p-0.5">
            <button
              onClick={() => setEdition('singapore')}
              className={`px-3 py-1 rounded text-xs font-semibold ${
                edition === 'singapore' ? 'bg-[#002663] text-white' : 'text-gray-700'
              }`}
            >
              Singapore
            </button>
            <button
              onClick={() => setEdition('international')}
              className={`px-3 py-1 rounded text-xs font-semibold ${
                edition === 'international' ? 'bg-[#002663] text-white' : 'text-gray-700'
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Quick Features Row */}
        <div className="grid grid-cols-3 border-b border-gray-200 bg-white text-center text-xs divide-x divide-gray-200">
          <button
            onClick={() => {
              onClose();
              onOpenBookmarks();
            }}
            className="p-3 hover:bg-gray-50 flex flex-col items-center justify-center text-gray-700 cursor-pointer"
          >
            <Bookmark className="w-4 h-4 text-[#002663] mb-1" />
            <span className="font-semibold text-[11px]">Saved Articles</span>
          </button>
          <a
            href="#epaper"
            onClick={(e) => {
              e.preventDefault();
              alert('Opening Straits Times E-Paper replica edition viewer.');
            }}
            className="p-3 hover:bg-gray-50 flex flex-col items-center justify-center text-gray-700 cursor-pointer"
          >
            <Newspaper className="w-4 h-4 text-[#002663] mb-1" />
            <span className="font-semibold text-[11px]">E-Paper</span>
          </a>
          <a
            href="#podcasts"
            onClick={(e) => {
              e.preventDefault();
              alert('Browsing Straits Times Tech and News Podcasts.');
            }}
            className="p-3 hover:bg-gray-50 flex flex-col items-center justify-center text-gray-700 cursor-pointer"
          >
            <Headphones className="w-4 h-4 text-[#002663] mb-1" />
            <span className="font-semibold text-[11px]">Podcasts</span>
          </a>
        </div>

        {/* Sections Scrollable List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {sections.map((sec) => (
            <div key={sec.title} className="border-b border-gray-100 pb-4">
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center justify-between ${
                sec.highlight ? 'text-[#002663]' : 'text-gray-900'
              }`}>
                <span>{sec.title}</span>
                {sec.highlight && (
                  <span className="bg-blue-100 text-[#002663] text-[9px] px-1.5 py-0.5 rounded font-mono">
                    Current Focus
                  </span>
                )}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {sec.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      onSelectCategory(item);
                      onClose();
                    }}
                    className="text-left py-1 text-gray-600 hover:text-[#002663] hover:underline flex items-center justify-between pr-2 cursor-pointer"
                  >
                    <span>{item}</span>
                    <ChevronRight className="w-3 h-3 text-gray-300" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Info */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
          <p className="font-semibold text-gray-800">The Straits Times Digital</p>
          <p className="text-[11px] mt-0.5">SPH Media Trust. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
