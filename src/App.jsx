import React, { useState } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import HeroSpline from './components/HeroSpline';
import DashboardSections from './components/DashboardSections';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0b10] text-white selection:bg-purple-500/30">
      <TopNav onMenuClick={() => setSidebarOpen(true)} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 py-6 space-y-6">
            <HeroSpline />
            <DashboardSections />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
