import React, { useState } from 'react';

interface GalleryProps {
  onViewComposer: () => void;
  onViewArchive: () => void;
}

type FilterType = 'ALL' | 'SEASONAL' | 'ARCHITECTURAL' | 'WILD';

const galleryItems = [
  {
    id: 1,
    title: "The White Silence",
    desc: "Dried Lunaria & Cotton",
    price: "$145.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo0iYOVY0YDaB7V1BLgwGf3DA_8dYdfCiHb652bDilrj2bSbs95glnCfW7opX5QUPl0eJ4VAxZ5zqrOJunjrwUPElOLYGesXGgSu2AIBkJstplHvPATf9HdWwvsIQj8OFNVeNh3EqwWLIj4PdZFMjdvRQDl3g3ypUtRMKPSqKDsMTnTrMtk72TRDwfN-A-bCE26aCBDcbLrXYkWlL_pKPL5kaavcRBdVrOHd-VezQOLH-o-zTPt0-KifryHG_caYL1Lac7TXNUMez6",
    height: "h-[600px]",
    type: "portrait",
    tags: ['ARCHITECTURAL', 'SEASONAL']
  },
  {
    id: 2,
    title: "Nocturne in Red",
    desc: "Black Baccara Rose",
    price: "$210.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv1daAT7BDi1QZl_rJ6aMozYC7X5SWD9R6GC4S7NBznksBIQ9dI4zEKOZF0K9uCw_bq90YJuV3zLnVaIEnQfa8Oe7zcW-qdI5m-TI0jvpB_KuONCh-8iDeeWJdzGUFLGBx_p2T4jN2FNoHx9byj7tc1h_81B8zLvsdF6cgfZm5Y9QYE3DxWXUQioZ0bhgK9t7__75f3AlOJP3X8w5W_0GxTfOxYHLzhcP3o3jYb1f5pFOt3tbl3Kz4brPQYTn678NVzYQU_baNgpja",
    height: "aspect-square",
    type: "square",
    tags: ['SEASONAL']
  },
  {
    id: 3,
    title: "Ikebana Study 04",
    desc: "Lotus Pod & Reed",
    price: "$85.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsH52yFc7zMTxZrbBAW-v3PNFkOjD02tocit0MpyplQLjLUrJwXhwR1-cJVKSZ7Wq4qrBEOb-W27PsG7gJNR6RwHKrC-SBJaWvkZsO5O6SUjHYsaXwVHLOEoiQvrpg03kkP7z4BniYDtagK4lVCDkgqV17eMjmG8v9ysMI1DNE-H9hpI90wtLaB6xAw4ptWhnVPUExFLuBaj_tmhCVWC22F8IHTyh4-d3CZk3xz26LhtmI0YBYgmHMlgL8Yuh6pO5iXCBxk1nwHle-",
    height: "h-[450px]",
    type: "portrait-md",
    tags: ['ARCHITECTURAL', 'WILD']
  },
  {
    id: 4,
    title: "Meadow Deconstructed",
    desc: "Chamomile & Grasses",
    price: "$120.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZT3tS_VsiJt6S-JT7K3EWHHFpDddJEYLDrunI5s-CglxGHes2t53FJp9yKY1YtRr-ccogozC_mRnR-5IOkQG68zfpNXEUc7YSzCzIcFyGY2Etd9xdtLnQ1kJBCxr3DOZWrT5ZMZCBVNzIiPGl-MxDBXZU9-NmulDwZDUylLZo137CbR3Nrm8jQX1UNh1i2pc5wrMB7TwzT8rliXKaGhDBevxqdHTUd5MexPjss48B-5nKmaddJJdiL9-Blsr7nbq8cYlesaQ1jKhK",
    height: "h-[300px]",
    type: "landscape",
    tags: ['WILD']
  },
  {
    id: 5,
    title: "Tropic Form",
    desc: "King Protea & Palm",
    price: "$180.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVOK0pGp0fVfE3gm8AvFg_MBt7mTrfk3fXnTW3sogWhmRgWA42ilNZlbiCilwMOGE6dlBn-vYUH_MnChT49pGkDJtJelJdIPreljvoqFNnDUuNvPPitRtt8azlt3OgJBbDYtPBDSENnGNrzIDbakCK3_HQq81oVR6Pp6OFEKFQzZhjigXQoVq0hTv85jKlFv081rlXCFafZgYnPWJVaQn9IRT_eL_j5-0Gqyaiu8rG5FzPLHIrebcdzR12W2VBdK47lSF75p4CehL1",
    height: "h-[550px]",
    type: "portrait",
    tags: ['ARCHITECTURAL']
  },
  {
    id: 6,
    title: "Phalaenopsis Arch",
    desc: "White Orchid",
    price: "$250.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSexMv2mB84TBxOrVVhXUcIIfa7x7iuKG9hsuyS1TKBoJlls8m_EhohxsCAlq7jK4msFwlC2jOZxWdzWw1aJy61S9xUS20WF4vahoYMvj2EbkI-PALSHC496zAAEZ48k3g7gzPLqFntmLnikvpvRoke-i3Q82UItax9hsrBbXnSol8bkQ1OljRz648C7DwMP_ZKXtHVLw9gQF3Ie4j9A63FvlzAkC8r9f2n0sRBdfhZ0jJ0k4f3OEQY7ux4hKJ45ZkpMESVH4Q5JwT",
    height: "h-[400px]",
    type: "portrait-sm",
    tags: ['SEASONAL', 'ARCHITECTURAL']
  }
];

const Gallery: React.FC<GalleryProps> = ({ onViewComposer, onViewArchive }) => {
  const [filter, setFilter] = useState<FilterType>('ALL');

  const filteredItems = filter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.tags.includes(filter));

  return (
    <div className="flex flex-col h-full overflow-y-auto no-scrollbar scroll-smooth">
      {/* Header Filter Bar */}
      <header className="sticky top-0 z-40 bg-raw-silk/95 backdrop-blur-sm border-b border-primary/10 w-full px-8 py-6 flex justify-between items-end transition-all duration-300">
        <div className="flex flex-col cursor-pointer" onClick={() => setFilter('ALL')}>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-bold">The Mood Gallery</h2>
          <p className="font-body text-muted text-sm mt-1 tracking-wide">
            {filter === 'ALL' ? 'Curated botanical architecture.' : `Filtering by: ${filter.toLowerCase()}`}
          </p>
        </div>
        <div className="flex items-center gap-8 pb-1">
          <FilterLink label="Seasonal" isActive={filter === 'SEASONAL'} onClick={() => setFilter(filter === 'SEASONAL' ? 'ALL' : 'SEASONAL')} />
          <FilterLink label="Architectural" isActive={filter === 'ARCHITECTURAL'} onClick={() => setFilter(filter === 'ARCHITECTURAL' ? 'ALL' : 'ARCHITECTURAL')} />
          <FilterLink label="Wild" isActive={filter === 'WILD'} onClick={() => setFilter(filter === 'WILD' ? 'ALL' : 'WILD')} />
        </div>
      </header>

      {/* Masonry Grid */}
      <div className="flex-1 p-6 md:p-8 lg:p-12 min-h-screen">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 w-full max-w-[1800px] mx-auto transition-all duration-500">
          {filteredItems.map((item) => (
            <div key={item.id} className="break-inside-avoid group relative cursor-view overflow-hidden animate-in fade-in zoom-in-95 duration-500" onClick={onViewComposer}>
              <div className={`relative w-full ${item.height} overflow-hidden bg-surface`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90 grayscale-[10%] group-hover:grayscale-0"
                />
                {/* Wireframe Overlay Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-white/30 m-4"></div>
                  <div className="absolute top-8 right-8 font-sans text-[10px] text-white tracking-widest uppercase text-right">
                    Fig. 0{item.id} <br/> Elev. 45°
                  </div>
                </div>
              </div>
              
              {/* Hover Text Reveal */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-primary/90 to-transparent">
                <h3 className="font-display text-2xl text-white mb-1">{item.title}</h3>
                <div className="flex justify-between items-end border-t border-white/20 pt-2 mt-2">
                  <span className="text-white/80 text-xs font-sans tracking-wider uppercase">{item.desc}</span>
                  <span className="text-white font-sans font-medium">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
             <div className="w-full h-64 flex flex-col items-center justify-center text-muted">
                 <span className="material-symbols-outlined text-4xl mb-4 opacity-50">spa</span>
                 <p className="font-grotesk text-sm uppercase tracking-widest">No compositions found</p>
             </div>
        )}

        {/* Load Archive Indicator */}
        {filteredItems.length > 0 && (
            <div className="w-full flex justify-center mt-12 mb-24">
            <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={onViewArchive}>
                <span className="text-xs tracking-[0.2em] font-medium text-muted uppercase group-hover:text-primary transition-colors">View More</span>
                <div className="h-12 w-px bg-primary/20 group-hover:h-20 transition-all duration-500 relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

const FilterLink: React.FC<{label: string; isActive: boolean; onClick: () => void}> = ({label, isActive, onClick}) => (
    <button onClick={onClick} className="relative group">
        <span className={`text-sm tracking-widest uppercase transition-colors ${isActive ? 'text-primary font-bold' : 'text-muted hover:text-primary font-medium'}`}>{label}</span>
        <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
    </button>
);

export default Gallery;