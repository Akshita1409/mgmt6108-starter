import React from 'react';

interface SidebarAdProps {
  onLearnMore: () => void;
}

export const SidebarAd: React.FC<SidebarAdProps> = ({ onLearnMore }) => {
  return (
    <div
      className="bg-gradient-to-b from-[#b38550] via-[#c69a65] to-[#a06d39] rounded-md p-6 text-white relative shadow-md overflow-hidden flex flex-col justify-between min-h-[380px]"
      data-purpose="sidebar-card-ad"
    >
      {/* Top Header */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs uppercase tracking-wider font-semibold opacity-90">Receive up to</p>
          <h3 className="text-2xl font-black leading-tight mt-1">
            45,000<br />
            KrisFlyer<br />
            miles
          </h3>
        </div>
        <div className="bg-[#006fcf] text-white font-bold text-[10px] p-1.5 rounded flex items-center justify-center shadow-xs">
          AMEX
        </div>
      </div>

      {/* Mid Banner Badge */}
      <div className="my-3">
        <span className="inline-block bg-[#004b93] text-white text-[11px] font-bold px-3 py-1 rounded shadow">
          MEMBER BONANZA
        </span>
        <div className="mt-2 text-sm">
          <span className="block text-xs opacity-90">Plus additional</span>
          <strong className="text-lg text-yellow-200">S$100 eCapitaVouchers</strong>
          <span className="block text-[11px] opacity-80">for a limited time only.</span>
        </div>
      </div>

      {/* Bottom Button & Card Graphic */}
      <div className="flex items-end justify-between mt-4">
        {/* Card Graphic */}
        <div className="w-24 h-14 bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800 rounded border border-white/60 p-1.5 shadow flex flex-col justify-between">
          <span className="text-[7px] font-mono tracking-tighter uppercase text-gray-700">
            KrisFlyer Ascend
          </span>
          <div className="text-[6px] text-gray-500 text-right font-mono">•••• 8821</div>
        </div>

        {/* Learn More Button */}
        <button
          onClick={onLearnMore}
          className="bg-black/85 hover:bg-black active:scale-95 text-white text-xs font-semibold px-5 py-2 rounded-full border border-gray-400 transition shadow cursor-pointer"
        >
          Learn More
        </button>
      </div>

      <div className="text-[8px] text-white/70 text-right mt-3">T&Cs apply.</div>
    </div>
  );
};
