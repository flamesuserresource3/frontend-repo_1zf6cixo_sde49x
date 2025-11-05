import React from 'react';
import Spline from '@splinetool/react-spline';

const FeaturedCard = ({ title, subtitle, image, cta }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-all">
      <img src={image} alt={title} className="h-28 w-full object-cover rounded-xl opacity-90" />
      <div className="mt-3">
        <p className="text-white/80 text-xs uppercase tracking-wide">{subtitle}</p>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <button className="mt-3 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-1.5 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          {cta}
        </button>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
};

const HeroSpline = () => {
  return (
    <section className="relative h-[380px] rounded-3xl overflow-hidden border border-white/10 bg-black/40">
      <Spline
        scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow">
            Unleash imagination with AI
          </h1>
          <p className="mt-2 max-w-xl text-white/80">
            Create, remix, and animate your ideas with powerful AI tools. Smooth, fast, and beautiful.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <FeaturedCard
            title="Unlimited Sora 2"
            subtitle="Featured"
            image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
            cta="Try Now"
          />
          <FeaturedCard
            title="Try VEO"
            subtitle="New"
            image="https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop"
            cta="Try Now"
          />
          <FeaturedCard
            title="Imagine Mode"
            subtitle="Creative"
            image="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop"
            cta="Explore"
          />
          <FeaturedCard
            title="Motion FX"
            subtitle="Hot"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            cta="Use Now"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
