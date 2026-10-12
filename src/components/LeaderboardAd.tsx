import React from 'react';

interface LeaderboardAdProps {
  onLearnMore: () => void;
}

export const LeaderboardAd: React.FC<LeaderboardAdProps> = ({ onLearnMore }) => {
  return (
    <div className="w-full bg-[#f2f2f2] py-3 md:py-4 flex justify-center items-center border-b border-gray-200">
      <div 
        className="w-full max-w-[970px] min-h-[90px] bg-[#1a1a1a] relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-3 md:py-0 rounded-sm shadow-sm transition hover:shadow"
        data-purpose="leaderboard-ad"
      >
        {/* Left Section: AMEX Logo & Headline */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-2 md:mb-0 w-full md:w-auto">
          {/* AMEX Blue Box Logo */}
          <div className="bg-[#006fcf] text-white font-bold text-xs p-1.5 rounded flex items-center justify-center tracking-tighter w-10 h-10 flex-shrink-0 shadow-inner">
            AMEX
          </div>
          <div className="text-white">
            <p className="text-[11px] sm:text-xs uppercase tracking-wide text-gray-300 font-medium">Receive up to</p>
            <p className="text-lg sm:text-xl font-extrabold leading-none tracking-tight text-white">45,000 KrisFlyer miles</p>
            <div className="inline-block bg-[#0055a5] text-[10px] font-bold px-2 py-0.5 mt-1 rounded text-white tracking-wide">
              MEMBER BONANZA
            </div>
          </div>
        </div>

        {/* Right Section: Bonus Vouchers, Card Graphic, CTA */}
        <div className="flex items-center justify-between sm:justify-end space-x-3 sm:space-x-6 w-full md:w-auto">
          <div className="text-white text-left md:text-right">
            <p className="text-[11px] sm:text-xs text-gray-300">Plus additional</p>
            <p className="text-base sm:text-lg font-bold text-yellow-400 leading-tight">S$100 eCapitaVouchers</p>
            <p className="text-[9px] text-gray-400">for a limited time only.</p>
          </div>

          {/* Card Graphic */}
          <div className="hidden sm:flex w-16 sm:w-20 h-10 sm:h-12 bg-gradient-to-tr from-gray-700 via-gray-600 to-gray-500 rounded border border-gray-400 shadow-sm items-center justify-center flex-shrink-0">
            <span className="text-[8px] text-gray-200 tracking-widest font-mono">KRISFLYER</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={onLearnMore}
            className="bg-white text-gray-900 hover:bg-gray-100 active:scale-95 text-xs font-semibold px-4 py-2 rounded-full transition shadow cursor-pointer whitespace-nowrap"
          >
            Learn More
          </button>
        </div>

        {/* Terms note */}
        <div className="absolute bottom-1 right-2 text-[7px] text-gray-400">
          T&Cs apply.
        </div>
      </div>
    </div>
  );
};
