import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const NewsletterBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 p-5 rounded">
      <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide">
        The Straits Times Newsletters
      </h4>
      <p className="text-xs text-gray-600 mt-1">
        Get the latest technology breakthroughs and top stories delivered right to your inbox.
      </p>

      {isSubscribed ? (
        <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded flex items-start space-x-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-emerald-800">You're subscribed!</p>
            <p className="text-[11px] text-emerald-700 mt-0.5">
              A confirmation email has been sent to <span className="font-medium">{email}</span>.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              placeholder="Enter your email"
              className="text-xs w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-[#002663] border-r-0 bg-white text-gray-800"
            />
            <button
              type="submit"
              className="bg-[#002663] text-white px-4 py-2 text-xs font-semibold rounded-r hover:bg-[#0b2046] transition cursor-pointer flex-shrink-0"
            >
              Sign Up
            </button>
          </div>
          {error && <p className="text-[11px] text-red-600 mt-1.5">{error}</p>}
          <p className="text-[10px] text-gray-400 mt-2">
            By signing up, you agree to our Terms &amp; Conditions and Privacy Policy.
          </p>
        </form>
      )}
    </div>
  );
};
