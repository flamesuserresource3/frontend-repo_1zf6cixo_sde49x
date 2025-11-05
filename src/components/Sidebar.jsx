import React from 'react';
import { Home, Image as ImageIcon, Repeat, Video, Wand2, Grid, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label }) => (
  <button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
    <Icon className="h-5 w-5 text-white/60 group-hover:text-white" />
    <span className="hidden lg:inline">{label}</span>
  </button>
);

const Sidebar = ({ open, onClose }) => {
  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 w-72 lg:w-64 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-r border-white/10 p-4 transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="flex items-center justify-between lg:justify-start">
        <span className="font-semibold text-white/90 lg:hidden">Menu</span>
        <button
          className="lg:hidden rounded-md px-2 py-1 text-white/70 hover:text-white hover:bg-white/10"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <nav className="mt-4 space-y-1">
        <NavItem icon={Home} label="Home" />
        <NavItem icon={ImageIcon} label="Create Image" />
        <NavItem icon={Repeat} label="Remix Image" />
        <NavItem icon={Video} label="Create Video" />
        <NavItem icon={Wand2} label="Apply Effect" />
        <NavItem icon={Grid} label="Gallery" />
        <NavItem icon={Settings} label="Settings" />
      </nav>
      <div className="mt-6 rounded-xl p-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/10">
        <p className="text-white/80 text-sm">Plan</p>
        <p className="text-white font-semibold">Free</p>
        <p className="text-white/60 text-xs mt-2">Upgrade to Pro for higher limits and faster generations.</p>
        <button className="mt-3 w-full rounded-lg bg-white/10 hover:bg-white/20 text-white py-2 text-sm">Upgrade</button>
      </div>
    </aside>
  );
};

export default Sidebar;
