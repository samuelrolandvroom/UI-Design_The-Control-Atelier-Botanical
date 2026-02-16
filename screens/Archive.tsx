import React from 'react';

interface ArchiveProps {
  onBack: () => void;
}

const archiveItems = Array.from({ length: 12 }).map((_, i) => ({
  id: `arch-${i}`,
  date: `2024.${12 - i}.01`,
  title: ['Faded Peony', 'Dry Palm Study', 'Structure 09', 'Void Space', 'Winter Solstice', 'Entropy', 'Monolith', 'Raw Silk', 'Paperwhite', 'Ash & Bone', 'Velvet Decay', 'Static Form'][i],
  img: [
    "https://images.unsplash.com/photo-1590059392864-793a869a473b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1562690868-60bbe7624e0d?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621245082729-2391696df3db?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1496857239036-1fb137683000?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1495908333965-f43c88696828?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=600"
  ][i]
}));

const Archive: React.FC<ArchiveProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-raw-silk overflow-y-auto animate-in slide-in-from-bottom-8 duration-700">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-raw-silk/95 backdrop-blur-sm border-b border-primary/10 w-full px-8 py-6 flex justify-between items-center">
        <div>
            <h1 className="font-display text-3xl text-primary">The Archive</h1>
            <p className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">Collections 2024 — 2025</p>
        </div>
        <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
        >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Return to Gallery</span>
        </button>
      </header>

      {/* Grid */}
      <div className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {archiveItems.map((item) => (
                <div key={item.id} className="group relative aspect-[3/4] bg-surface overflow-hidden cursor-pointer border border-transparent hover:border-accent/20 transition-all">
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10 backdrop-blur-[1px]">
                        <div className="flex justify-between items-start">
                            <span className="text-[10px] font-mono text-white bg-black/50 px-1 py-0.5">{item.id}</span>
                            <span className="material-symbols-outlined text-white text-lg">arrow_outward</span>
                        </div>
                        <div>
                            <span className="block text-xs font-mono text-white/80 mb-1">{item.date}</span>
                            <h3 className="font-display text-xl text-white leading-none">{item.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center border-t border-primary/10 pt-12 pb-24">
            <p className="font-grotesk text-xs uppercase tracking-widest text-muted">End of Records</p>
        </div>
      </div>
    </div>
  );
};

export default Archive;