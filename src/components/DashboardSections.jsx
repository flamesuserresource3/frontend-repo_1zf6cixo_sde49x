import React from 'react';
import { Image as ImageIcon, Video, Sparkles, Camera, Play, Download, Share2 } from 'lucide-react';

const ActionCard = ({ icon: Icon, title, gradient }) => {
  return (
    <button
      className={`group relative overflow-hidden rounded-2xl border border-white/10 p-5 text-left transition hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] ${gradient}`}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15),transparent_50%)]" />
      <Icon className="h-6 w-6 text-white" />
      <h4 className="mt-3 text-white font-semibold text-lg">{title}</h4>
      <p className="text-white/70 text-sm">Start creating with AI</p>
    </button>
  );
};

const CameraPreview = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white/90 font-semibold">Camera Control</h3>
        <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-sm">
          <Play className="h-4 w-4" /> Preview
        </button>
      </div>
      <div className="mt-3 aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50 grid place-items-center">
        <Camera className="h-12 w-12 text-white/30" />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <button className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-sm">Stabilize</button>
        <button className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-sm">Track</button>
        <button className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 text-sm">Auto-Frame</button>
      </div>
    </div>
  );
};

const GalleryItem = ({ src, type }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <img src={src} alt={type} className="w-full h-40 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-2 left-2 right-2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-white/90 px-2 py-1 rounded-md bg-black/40 backdrop-blur">{type}</span>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-1 text-xs text-white/90 px-2 py-1 rounded-md bg-white/10 hover:bg-white/20">
            <Download className="h-3.5 w-3.5" />
          </button>
          <button className="inline-flex items-center gap-1 text-xs text-white/90 px-2 py-1 rounded-md bg-white/10 hover:bg-white/20">
            <Share2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardSections = ({ userName = 'Bharath' }) => {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <p className="text-white/80">Welcome, <span className="font-semibold text-white">{userName}</span></p>
        <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-white">What will you create today?</h2>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ActionCard
            icon={ImageIcon}
            title="Image"
            gradient="bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"
          />
          <ActionCard
            icon={Video}
            title="Video"
            gradient="bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
          />
          <ActionCard
            icon={Sparkles}
            title="Imagine"
            gradient="bg-gradient-to-br from-fuchsia-500/20 via-rose-500/20 to-amber-500/20"
          />
          <ActionCard
            icon={Camera}
            title="Motion"
            gradient="bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20"
          />
        </div>
      </div>

      <CameraPreview />

      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-white/90 font-semibold">Your Gallery</h3>
          <button className="text-sm text-white/80 hover:text-white">View all</button>
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520975922327-24a90cb7a2aa?q=80&w=800&auto=format&fit=crop',
          ].map((src, idx) => (
            <GalleryItem key={idx} src={src} type={idx % 3 === 0 ? 'Video' : 'Image'} />
          ))}
        </div>
      </div>

      <footer className="py-8 text-center text-white/50">
        Created by Bharath
      </footer>
    </div>
  );
};

export default DashboardSections;
