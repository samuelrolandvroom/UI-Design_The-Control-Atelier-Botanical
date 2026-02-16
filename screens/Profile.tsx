import React from 'react';

interface ProfileProps {
  onContact: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onContact }) => {
  return (
    <div className="flex flex-col h-full bg-raw-silk overflow-y-auto">
      {/* Header */}
      <header className="px-8 py-12 border-b border-primary/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                  <h1 className="font-display text-4xl md:text-5xl text-primary mb-2">Aida V.</h1>
                  <p className="font-mono text-sm text-muted">Member since 2025 • Studio Priority Access</p>
              </div>
              <div className="flex gap-4">
                  <button className="h-10 px-6 border border-primary/20 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">Settings</button>
                  <button className="h-10 px-6 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-accent-dark transition-colors shadow-sm">New Commission</button>
              </div>
          </div>
      </header>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto w-full p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Dashboard (2/3) */}
          <div className="lg:col-span-2 space-y-12">
              
              {/* Active Orders */}
              <section>
                  <div className="flex items-center gap-4 mb-6 border-b border-primary/10 pb-4">
                      <h2 className="font-display text-2xl text-primary">Commission History</h2>
                      <span className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-1 rounded-full">3 TOTAL</span>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                      <HistoryItem 
                        id="#8492" 
                        date="Oct 24, 2025" 
                        title="White Anemone Study" 
                        status="Processing" 
                        price="$191.00"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuCRIehZs-3k6zd98OcOXEqkxCO8HOhkBAOQc7jcRiKyWRF8Ytr0sygeSkum1NNusxP32T24cEasfQ8VgsS8xh_nUL3p1qJeTeuJmH729zFmwMb_ac49Gm8c8TlOa6Ua8GjWQsKpztZd76eh8NNvNWwsdVolfcCRu4U8gjlWl1GbCtpXm-QQwpp-xrPkB5Cm2mqyhIUjtLk-VwPWloqmcyTMN-hIGQB07aK4jYwFGzrpj5kNZnLDwRgnXpu7dQNl-Ve-r3P2t_QKODDg"
                      />
                      <HistoryItem 
                        id="#8104" 
                        date="Sep 12, 2025" 
                        title="Ikebana Brutalist" 
                        status="Delivered" 
                        price="$245.00"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuCsH52yFc7zMTxZrbBAW-v3PNFkOjD02tocit0MpyplQLjLUrJwXhwR1-cJVKSZ7Wq4qrBEOb-W27PsG7gJNR6RwHKrC-SBJaWvkZsO5O6SUjHYsaXwVHLOEoiQvrpg03kkP7z4BniYDtagK4lVCDkgqV17eMjmG8v9ysMI1DNE-H9hpI90wtLaB6xAw4ptWhnVPUExFLuBaj_tmhCVWC22F8IHTyh4-d3CZk3xz26LhtmI0YBYgmHMlgL8Yuh6pO5iXCBxk1nwHle-"
                      />
                      <HistoryItem 
                        id="#7921" 
                        date="Aug 02, 2025" 
                        title="Nocturne Red" 
                        status="Delivered" 
                        price="$210.00"
                        img="https://lh3.googleusercontent.com/aida-public/AB6AXuAv1daAT7BDi1QZl_rJ6aMozYC7X5SWD9R6GC4S7NBznksBIQ9dI4zEKOZF0K9uCw_bq90YJuV3zLnVaIEnQfa8Oe7zcW-qdI5m-TI0jvpB_KuONCh-8iDeeWJdzGUFLGBx_p2T4jN2FNoHx9byj7tc1h_81B8zLvsdF6cgfZm5Y9QYE3DxWXUQioZ0bhgK9t7__75f3AlOJP3X8w5W_0GxTfOxYHLzhcP3o3jYb1f5pFOt3tbl3Kz4brPQYTn678NVzYQU_baNgpja"
                      />
                  </div>
              </section>

              {/* Saved Palettes */}
              <section>
                  <div className="flex items-center gap-4 mb-6 border-b border-primary/10 pb-4">
                      <h2 className="font-display text-2xl text-primary">Saved Harmonies</h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="aspect-square bg-surface border border-primary/10 p-4 flex flex-col justify-between hover:border-accent/50 transition-colors cursor-pointer group">
                          <div className="flex gap-1">
                              <div className="size-6 rounded-full bg-[#9A463D]"></div>
                              <div className="size-6 rounded-full bg-[#E5B5A6]"></div>
                              <div className="size-6 rounded-full bg-[#2C2C2B]"></div>
                          </div>
                          <span className="font-mono text-xs text-primary group-hover:text-accent">Vermilion Triad</span>
                      </div>
                      <div className="aspect-square bg-surface border border-primary/10 p-4 flex flex-col justify-between hover:border-accent/50 transition-colors cursor-pointer group">
                          <div className="flex gap-1">
                              <div className="size-6 rounded-full bg-[#4A5D4E]"></div>
                              <div className="size-6 rounded-full bg-[#8FA395]"></div>
                              <div className="size-6 rounded-full bg-[#F2F0EB]"></div>
                          </div>
                          <span className="font-mono text-xs text-primary group-hover:text-accent">Sage Mono</span>
                      </div>
                      <div className="aspect-square border border-dashed border-primary/20 flex flex-col items-center justify-center gap-2 text-muted hover:text-primary hover:border-primary cursor-pointer transition-all">
                          <span className="material-symbols-outlined">add</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold">New Palette</span>
                      </div>
                  </div>
              </section>

          </div>

          {/* Sidebar Info (1/3) */}
          <aside className="space-y-8">
              <div className="bg-white p-6 border border-primary/10">
                  <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] font-bold text-muted mb-4">Default Shipping</h3>
                  <div className="font-mono text-sm text-primary space-y-1">
                      <p>Aida V.</p>
                      <p>12 Rue de la Paix</p>
                      <p>75002 Paris, France</p>
                  </div>
                  <button className="mt-4 text-[10px] uppercase tracking-widest text-accent font-bold hover:underline">Edit Address</button>
              </div>

              <div className="bg-primary text-raw-silk p-6">
                  <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] font-bold text-white/60 mb-4">Concierge</h3>
                  <p className="font-body text-sm mb-4">Need assistance with a large scale event or custom installation?</p>
                  <button onClick={onContact} className="w-full py-3 border border-white/20 hover:bg-white hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">Contact Studio</button>
              </div>
          </aside>
      </div>
    </div>
  );
};

const HistoryItem: React.FC<{id: string; date: string; title: string; status: string; price: string; img: string}> = ({id, date, title, status, price, img}) => (
    <div className="flex items-center gap-4 p-4 bg-white border border-primary/5 hover:border-accent/30 transition-all group cursor-pointer">
        <div className="size-16 bg-surface overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="flex-1">
            <div className="flex justify-between mb-1">
                <h3 className="font-body font-bold text-primary">{title}</h3>
                <span className="font-mono text-xs text-muted">{id}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-muted">{date}</span>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 ${status === 'Processing' ? 'bg-accent/10 text-accent' : 'bg-primary/5 text-primary'}`}>{status}</span>
            </div>
        </div>
        <div className="pl-4 border-l border-primary/10">
            <span className="font-mono text-sm font-medium">{price}</span>
        </div>
    </div>
);

export default Profile;