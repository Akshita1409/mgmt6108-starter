import React from 'react';
import { X, Plane, Gift, ShieldCheck, CreditCard, ExternalLink } from 'lucide-react';

interface AdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdModal: React.FC<AdModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-2xl overflow-hidden border border-gray-200">
        {/* Banner header with card gold gradient */}
        <div className="bg-gradient-to-r from-[#b38550] via-[#c69a65] to-[#8d5b29] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 text-white/80 hover:text-white hover:bg-black/20 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase opacity-90 mb-1">
            <span className="bg-[#006fcf] text-white px-1.5 py-0.5 rounded font-bold text-[10px]">AMEX</span>
            <span>American Express Singapore Airlines</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black leading-tight mt-1">
            KrisFlyer Ascend Credit Card
          </h2>
          <p className="text-xs text-yellow-100 mt-1 font-medium">
            Limited Time Member Bonanza Promotion
          </p>
        </div>

        {/* Highlights */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg">
              <div className="flex items-center space-x-2 text-amber-800 font-bold text-sm">
                <Plane className="w-4 h-4 text-amber-600" />
                <span>Up to 45,000 Miles</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Receive up to 45,000 KrisFlyer miles upon meeting minimum retail spend criteria.
              </p>
            </div>

            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-900 font-bold text-sm">
                <Gift className="w-4 h-4 text-[#0055a5]" />
                <span>S$100 eCapitaVouchers</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Receive an extra S$100 eCapitaVoucher when applying through The Straits Times partner channel.
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-gray-700">
            <h4 className="font-bold text-gray-900 uppercase tracking-wide text-[11px]">
              Cardholder Privileges
            </h4>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Complimentary 1-night stay each year at participating Hilton properties across Asia Pacific.</span>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>4 complimentary VIP airport lounge access passes to participating SATS and Plaza Premium lounges.</span>
            </div>
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Earn 1.2 KrisFlyer miles per S$1 spent locally, and 2.0 miles for direct bookings with SIA and Scoot.</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                alert('Redirecting to American Express Singapore official application portal with Straits Times partner promo code STBONANZA applied.');
                onClose();
              }}
              className="flex-1 bg-[#002663] hover:bg-[#0b2046] text-white text-xs sm:text-sm font-semibold py-2.5 rounded-full flex items-center justify-center space-x-1.5 transition cursor-pointer shadow"
            >
              <CreditCard className="w-4 h-4" />
              <span>Apply Online with Singpass</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-gray-300 text-gray-700 text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-50 transition cursor-pointer"
            >
              Close
            </button>
          </div>

          <p className="text-[10px] text-gray-400 text-center leading-tight">
            Terms and conditions apply. Promotion valid for new-to-card American Express customers residing in Singapore. Minimum qualifying spend applies within first 3 months.
          </p>
        </div>
      </div>
    </div>
  );
};
