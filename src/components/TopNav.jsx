import React from 'react';
import { Bell, MessageSquare, User, Sparkles, Menu } from 'lucide-react';

const TopNav = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.6)] grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">AI Creative Suite</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors">
            <MessageSquare className="h-5 w-5" />
          </button>
          <div className="ml-1 h-9 w-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 overflow-hidden grid place-items-center">
            <User className="h-5 w-5 text-white/90" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
