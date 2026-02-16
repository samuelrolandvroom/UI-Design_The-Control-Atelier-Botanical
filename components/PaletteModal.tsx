import React, { useState } from 'react';

interface PaletteModalProps {
  onClose: () => void;
}

const PaletteModal: React.FC<PaletteModalProps> = ({ onClose }) => {
  const [activeHue, setActiveHue] = useState('Vermilion');

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-raw-silk/95 backdrop-blur-sm h-screen w-full animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 md:px-12 md:py-8 shrink-0">
        <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent/80 font-grotesk">Mode</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight uppercase text-primary font-display">Color Theory</h1>
        </div>
        <button onClick={onClose} className="group flex h-12 w-12 items-center justify-center rounded-full border border-transparent hover:border-primary/20 transition-all duration-300">
            <span className="material-symbols-outlined text-4xl text-primary group-hover:rotate-90 transition-transform duration-500 font-light">close</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full overflow-hidden">
         <div className="absolute inset-0 pointer-events-none opacity-5 bg-dotted-grid"></div>
         
         {/* The Petal Wheel Container */}
         <div className="relative w-[360px] h-[360px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] flex items-center justify-center mb-8">
            {/* Central Info */}
            <div className="absolute z-30 flex flex-col items-center justify-center text-center pointer-events-none bg-white/80 backdrop-blur-md rounded-full w-32 h-32 md:w-40 md:h-40 border border-primary/10 shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-primary/60 mb-1 font-grotesk">Active Hue</span>
                <span className="text-xl md:text-2xl font-body font-medium text-accent">{activeHue}</span>
                <div className="w-8 h-[1px] bg-primary/20 my-2"></div>
                <span className="text-[10px] uppercase tracking-widest text-primary/60 font-grotesk">Warmth</span>
            </div>

            {/* SVG Wheel */}
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                <defs>
                    <clipPath id="wedge-1"><path d="M50,50 L50,0 A50,50 0 0,1 85.35,14.64 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-2"><path d="M50,50 L85.35,14.64 A50,50 0 0,1 100,50 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-3"><path d="M50,50 L100,50 A50,50 0 0,1 85.35,85.36 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-4"><path d="M50,50 L85.35,85.36 A50,50 0 0,1 50,100 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-5"><path d="M50,50 L50,100 A50,50 0 0,1 14.64,85.36 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-6"><path d="M50,50 L14.64,85.36 A50,50 0 0,1 0,50 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-7"><path d="M50,50 L0,50 A50,50 0 0,1 14.64,14.64 L50,50 Z" /></clipPath>
                    <clipPath id="wedge-8"><path d="M50,50 L14.64,14.64 A50,50 0 0,1 50,0 L50,50 Z" /></clipPath>
                </defs>
                {/* Segments */}
                <WheelSegment clipPath="url(#wedge-1)" img="https://images.unsplash.com/photo-1590059392864-793a869a473b?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Vermilion'} onClick={() => setActiveHue('Vermilion')} />
                <WheelSegment clipPath="url(#wedge-2)" img="https://images.unsplash.com/photo-1562690868-60bbe7624e0d?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Marigold'} onClick={() => setActiveHue('Marigold')} />
                <WheelSegment clipPath="url(#wedge-3)" img="https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Sunflower'} onClick={() => setActiveHue('Sunflower')} />
                <WheelSegment clipPath="url(#wedge-4)" img="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Emerald'} onClick={() => setActiveHue('Emerald')} />
                <WheelSegment clipPath="url(#wedge-5)" img="https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Azure'} onClick={() => setActiveHue('Azure')} />
                <WheelSegment clipPath="url(#wedge-6)" img="https://images.unsplash.com/photo-1621245082729-2391696df3db?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Indigo'} onClick={() => setActiveHue('Indigo')} />
                <WheelSegment clipPath="url(#wedge-7)" img="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Violet'} onClick={() => setActiveHue('Violet')} />
                <WheelSegment clipPath="url(#wedge-8)" img="https://images.unsplash.com/photo-1496857239036-1fb137683000?auto=format&fit=crop&q=80&w=400" active={activeHue === 'Magenta'} onClick={() => setActiveHue('Magenta')} />
                <circle cx="50" cy="50" r="15" fill="transparent" />
            </svg>
         </div>

         {/* Harmony Toggles */}
         <div className="flex items-center gap-8 mb-4 z-20">
            <Toggle label="Monochromatic" active />
            <Toggle label="Analogous" />
            <Toggle label="Split-Comp" />
         </div>
         <p className="text-primary/60 text-sm italic font-body max-w-md text-center px-4">"Select a base color to explore harmonic pairings."</p>
      </div>

      {/* Footer Rail */}
      <div className="w-full bg-white/80 border-t border-primary/10 backdrop-blur-md h-auto shrink-0 flex flex-col">
        <div className="px-8 py-4 flex items-center justify-between border-b border-primary/5">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary/60">filter_vintage</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80 font-grotesk">Harmonic Matches: {activeHue}</span>
            </div>
            <div className="text-xs text-primary/50 uppercase tracking-wider font-grotesk">3 Stems Found</div>
        </div>
        {/* Horizontal Scroll */}
        <div className="flex overflow-x-auto no-scrollbar px-8 py-6 gap-6 w-full">
            <HarmonicCard name="Dahlia" sub="'Arabian Night'" price="$12.00" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBSSa_IMZOWYQQKi9sjhi75cHjAhkjOB7YWHHFllgvvTv7HaS6-_5ft7XxtsDiTQL6MioQYRg56OEmsIWB7Q6cdXfffRZunKzYrTzpjGkwMn5Jf0duGuZUOS-En7BQuhPnrZUvk9v31oYjtfSY9NMKZFuJmv2zn8z7xeeOMHvEfcPK7GhhuvMOvYsQPkcFjheJuPiAsnhWHcC7sAwWI7wkm6Y8g6qT_yyy5ETCwdCTPLMvRYoiqvsMOsZDC22Shbjq44K8iML0HY4BL" />
            <HarmonicCard name="Garden Rose" sub="'Piano'" price="$9.00" img="https://lh3.googleusercontent.com/aida-public/AB6AXuASzdswyvTUVZChlbF6K7sllFte_ZjmicGDwBD0shYfiEp8tDD48Jpyhy8M_B4VXb3fHD8DBG6f5U4FtMkn8kf5d-5Mv3XFevXWvtyVURlDmhki5QCgwFBrRzbKnVi5t2lKXJAdLpWhOdTdZCAKdZUMkSwzcqmRvn1tu-UP65ASXF0XYLEEHp14Zgdm-A6qawLeH4OFZ24sv7UVeTxGyL5taSZp-lgIxH1AzlLHKoFpQZoiAfwa-2gM5ttSu3i2lHWaVXWF6b-Td6fM" />
            <HarmonicCard name="Parrot Tulip" sub="'Rococo'" price="$15.00" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBN0H7MxZu2xVa2HN-aQnS5Qv5yyhLl_XVlBdlL259BNP6cKPn6gTMXf3IPwpIHXcsvBOlSK_XZIupv659qwSkCD-aT2oWegzC2RsFD0rianG2m-Rg5NLQtL0KLYwLU8DsExkEBCjFq3RXJ-Edv708eb4_vhBqC85uTgaBB9rEMgEs1or1FF9Ckw1YNnvFV5tqC1xigRTQgwBDR_dTuIYakvHqlWL89hoO2p6ICaZP-RdnLn11rBm7gjazSdc-I0ApvuzoleWgXy1Uz" />
            
            <div className="flex-none w-[150px] flex flex-col items-center justify-center border border-dashed border-primary/20 text-primary/40 hover:bg-primary/5 cursor-pointer transition-colors aspect-[4/5]">
                <span className="material-symbols-outlined mb-2">more_horiz</span>
                <span className="text-[10px] uppercase tracking-widest font-grotesk">More</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const WheelSegment: React.FC<{clipPath: string; img: string; active?: boolean; onClick: () => void}> = ({clipPath, img, active, onClick}) => (
    <g className={`wheel-segment ${active ? 'active' : ''}`} onClick={onClick}>
        <image href={img} x="0" y="0" width="100" height="100" clipPath={clipPath} preserveAspectRatio="xMidYMid slice" />
        <path d="M50,50 L50,0 A50,50 0 0,1 85.35,14.64 L50,50 Z" fill={active ? "rgba(189, 33, 15, 0.2)" : "transparent"} clipPath={clipPath} />
    </g>
);

const Toggle: React.FC<{label: string; active?: boolean}> = ({label, active}) => (
    <button className="group flex flex-col items-center gap-2">
        <span className={`text-xs font-bold tracking-[0.15em] uppercase pb-1 border-b font-grotesk ${active ? 'text-accent border-accent' : 'text-primary/50 border-transparent group-hover:text-primary'}`}>{label}</span>
        <span className={`w-1 h-1 rounded-full bg-primary transition-opacity ${active ? 'opacity-100 bg-accent' : 'opacity-0 group-hover:opacity-50'}`}></span>
    </button>
);

const HarmonicCard: React.FC<{name: string; sub: string; price: string; img: string}> = ({name, sub, price, img}) => (
    <div className="group relative flex-none w-[200px] flex flex-col gap-3 cursor-pointer">
        <div className="relative w-full aspect-[4/5] bg-surface overflow-hidden">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
            <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-accent text-white w-8 h-8 flex items-center justify-center hover:bg-accent-dark">
                    <span className="material-symbols-outlined text-sm">add</span>
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-0.5">
            <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold uppercase tracking-wide text-primary font-body">{name}</span>
                <span className="text-xs font-body text-accent">{price}</span>
            </div>
            <span className="text-xs font-body italic text-primary/60">{sub}</span>
        </div>
    </div>
);

export default PaletteModal;