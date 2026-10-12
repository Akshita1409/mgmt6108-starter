import React from 'react';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const handleLinkClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    if (onSelectCategory) {
      onSelectCategory(title);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-12 pt-8 pb-12 text-sm text-gray-600" data-purpose="site-footer">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Top Section: Logo & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-gray-200 gap-4">
          <a href="#" className="logo-font text-[#002663] text-2xl font-bold uppercase">
            THE STRAITS TIMES
          </a>
          <div className="flex flex-wrap gap-6 text-xs text-gray-700 font-medium">
            <a href="#epaper" onClick={(e) => handleLinkClick(e, 'E-paper')} className="hover:text-[#002663] transition">
              E-paper
            </a>
            <a href="#newsletters" onClick={(e) => handleLinkClick(e, 'Newsletters')} className="hover:text-[#002663] transition">
              Newsletters
            </a>
            <a href="#podcasts" onClick={(e) => handleLinkClick(e, 'Podcasts')} className="hover:text-[#002663] transition">
              Podcasts
            </a>
            <a href="#rss" onClick={(e) => handleLinkClick(e, 'RSS Feeds')} className="hover:text-[#002663] transition">
              RSS Feeds
            </a>
            <a href="#telegram" onClick={(e) => handleLinkClick(e, 'Telegram')} className="hover:text-[#002663] transition">
              Telegram
            </a>
          </div>
        </div>

        {/* Middle Section: Categories & Legal */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8 border-b border-gray-200 text-xs">
          <div>
            <h5 className="font-bold text-gray-900 mb-2">Singapore</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Politics')} className="hover:underline">Politics</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Jobs')} className="hover:underline">Jobs</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Housing')} className="hover:underline">Housing</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Transport')} className="hover:underline">Transport</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-2">Asia</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'SE Asia')} className="hover:underline">SE Asia</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'East Asia')} className="hover:underline">East Asia</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'South Asia')} className="hover:underline">South Asia</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Australia/NZ')} className="hover:underline">Australia/NZ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-2">World</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'United States')} className="hover:underline">United States</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Europe')} className="hover:underline">Europe</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Middle East')} className="hover:underline">Middle East</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-2">Tech</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Artificial Intelligence')} className="hover:underline font-semibold text-[#002663]">Artificial Intelligence</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Start-ups')} className="hover:underline">Start-ups</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Gadgets')} className="hover:underline">Gadgets</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Cybersecurity')} className="hover:underline">Cybersecurity</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-2">Business</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Banking')} className="hover:underline">Banking</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Economy')} className="hover:underline">Economy</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Invest')} className="hover:underline">Invest</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Property')} className="hover:underline">Property</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-gray-900 mb-2">Opinion</h5>
            <ul className="space-y-1.5 text-gray-600">
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'ST Editorial')} className="hover:underline">ST Editorial</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Columnists')} className="hover:underline">Columnists</a></li>
              <li><a href="#" onClick={(e) => handleLinkClick(e, 'Forum Letters')} className="hover:underline">Forum Letters</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & SPH Media Copyright */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex flex-wrap gap-4 text-center md:text-left">
            <a href="#terms" onClick={(e) => handleLinkClick(e, 'Terms & Conditions')} className="hover:underline">
              Terms &amp; Conditions
            </a>
            <a href="#privacy" onClick={(e) => handleLinkClick(e, 'Privacy Policy')} className="hover:underline">
              Privacy Policy
            </a>
            <a href="#help" onClick={(e) => handleLinkClick(e, 'Help')} className="hover:underline">
              Need help? Reach us here
            </a>
            <a href="#advertise" onClick={(e) => handleLinkClick(e, 'Advertise')} className="hover:underline">
              Advertise with us
            </a>
          </div>
          <p className="text-center md:text-right">
            SPH Media Limited. Co. Reg. No. 202120748H. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
