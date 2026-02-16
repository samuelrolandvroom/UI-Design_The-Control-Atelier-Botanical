import React, { useState, useRef, useMemo } from 'react';

interface ComposerProps {
  onOpenPalette: () => void;
  onCheckout: () => void;
}

// --- DATA MOCKS ---
type VesselType = 'ceramic' | 'glass' | 'ikebana' | 'organic';
type MechanicType = 'none' | 'wire' | 'frog' | 'foam';
type CategoryType = 'All' | 'Fresh' | 'Dried' | 'Foliage' | 'Custom';

interface InventoryItem {
  id: string;
  name: string;
  sci: string;
  price: number;
  img: string;
  category: CategoryType;
}

const INITIAL_INVENTORY: InventoryItem[] = [
  { id: '1', name: "Hellebore 'Onyx'", sci: "Helleborus orientalis", price: 12.00, category: 'Fresh', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8ak06lBcl9OuhGulAMxfDb8c63gMPRdNyJNRjslQQtpp09lCUlxnwbAcslSv6SkcONpEGoSzmMAcGZKH5EM-7rX9cpjscC8fSdMfd2ULW6i-77RXN8F40XBfCFtQVJQU12u-4WJd5BjfuTPiYSNnEgqqaFnvIGd0pU8Dblou8g32Obt_eEpCA851MKcOvj0qpFwCndCMDzN__UdX1LML9LVujH3uexepuetY_0ihEQUe9ksp16nS9ZFpRy5Rvv0H7T4hzJVFijrq" },
  { id: '2', name: "Anemone Coronaria", sci: "Anemone coronaria", price: 8.50, category: 'Fresh', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0cm_3_zqB7gNWGg5UqGROi6FZ1Wlaq7Dz08RmNiAizIUIdtWZif1SyOwZXr1sFkomF5UTra_0cU90L7xtNMYzSHustd4dvwpwyC3sEzEkqjKimnIZ5aIwZavwY7VhMLms0Eozr07blyGlGCnRWsN6z0JIdD7LycQ-3u2zX_ndm2cPbPObcHKks_2DiDUC1ef2_4H541KGZ0Dll-EbKI3VMCHyTtmqreTuXJBRvgIqphXPzcYDA8Uddl4rLi8vQZ7XlsNnR_bGEZul" },
  { id: '3', name: "Ruscus (Bleached)", sci: "Ruscus aculeatus", price: 5.00, category: 'Dried', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzPjS6HL0j0VE--OdGQZHU5h4D8nZ92ZWzd6pRGZ5ZQ_U7plnH9Vf-YO46YpqbnPOaO5iNq5CqfnijgFU3t89wZ2yYxyA1G7Q_RXrK0RsDA8hXH40WUuufhdCxsAprRD33f6xFKZ4Ef7LluqaQkfdFVVR8asdMrFRBofAur03h4GAHzcdG9ezTG8Tes0gQolKGQ41G9wIYsK6pt4nBEF2MP3PcFwcgDky72UcHdOwVm-NIaTwtYfcCnSM5zsslGUjP0Lw87ADbnQxS" },
  { id: '4', name: "Tulip 'Brownie'", sci: "Tulipa", price: 6.75, category: 'Fresh', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPC6GwD61_uXqMX539h_DEjhgxWQ_DK6o4HHAf6mF1UjVpWw7f8xTeqk1jJxmcgvjDIENEivk5-oXupC7X3AgF0qjabNiCfJm8IcBhOiJRswdPzANsv0G1dMh9BvzrQxHQ2FkvGRjFFFVor0j4f5ABNMY1LQ-ra_nulS4ULPPYogG9nWy73yfuBZAs0U5YuMNXzhg4-F9CKhV0v7RyfsNe7WxcKdXU_Ftw6QiOCJZbaKruckomLtmYFI3XHKLqf9aTUoxG6-75Yi1J" },
  { id: '5', name: "Eucalyptus Gunni", sci: "Eucalyptus gunnii", price: 9.00, category: 'Foliage', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9qmGnOCB6cTDP_djz25NwSOlIMWaCe9lhGU7LtdoOYsWT1o7ToYwqUxBgSBGRUoiPx_HGWlQc_Ct586ckA36tooIGGQe5aR-XIG7sVoQAJSedbKq36BMILZNkMMHPpvK5R3A5s1ZiWw7G9_ynQPmKGTQmQPMZhSGO65BrOxtp722VLsgEitOQu1XFMdre6nbyg-QPs5d_E98ifuiXKkZXaiddvUI9eGe_cCjK7h23xq3yUu0wUxsDcGMXn37HCdakpZUrGpNlopmq" },
  { id: '6', name: "Red Rose", sci: "Rosa", price: 7.00, category: 'Fresh', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyyBDT8HuT1jYsiemiA4gT4sze5CgrQeMnoqYKrBCjEAWI_dt4KzxjszgkEJnijY3IUBGFMUBwHYdkWB2P1q_j5sfYMei4mTK4FxBSl2yKOovxrng-weHTzsYsI-hhXwlNfoYq5gQfh1wrPZsZFMsDt-7XfLeTUQngiWXiqAYdvvp9OrgWf2rcGOghZxNX1CsUwfIc3JWYqZUJLqoeG-RuWsutWp68QdepZ3uPA4U68UQJQ7DKzqoFjGxoBcORtZcTjwAJnubgaeL" },
];

interface PlacedItem extends InventoryItem {
    instanceId: number;
    rotation: number;
    scale: number;
    xOffset: number;
}

const Composer: React.FC<ComposerProps> = ({ onOpenPalette, onCheckout }) => {
  // --- STATE ---
  const [selectedVessel, setSelectedVessel] = useState<VesselType>('ceramic');
  const [selectedMechanic, setSelectedMechanic] = useState<MechanicType>('wire');
  
  // Canvas State
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0); // in degrees
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  
  // Inventory State
  const [inventory, setInventory] = useState<InventoryItem[]>(INITIAL_INVENTORY);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<CategoryType>('All');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- ACTIONS ---

  // Inventory Filtering
  const filteredInventory = useMemo(() => {
    return inventory.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                              item.sci.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'All' || item.category === filter;
        return matchesSearch && matchesFilter;
    });
  }, [inventory, search, filter]);

  // Canvas Controls
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.1, 2));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.1, 0.5));
  const handleRotate = () => setRotation(r => r + 45);
  const handleCenter = () => { setZoom(1); setRotation(0); };

  // Add Item to Canvas
  const handleAddItem = (item: InventoryItem) => {
    const newItem: PlacedItem = {
        ...item,
        instanceId: Date.now(),
        rotation: (Math.random() * 20) - 10, // Random slight rotation
        scale: 0.9 + (Math.random() * 0.2), // Random slight scale
        xOffset: (Math.random() * 40) - 20, // Random X pos
    };
    setPlacedItems([...placedItems, newItem]);
  };

  const handleRemoveItem = (instanceId: number) => {
      setPlacedItems(placedItems.filter(i => i.instanceId !== instanceId));
  };

  // Upload Custom Item
  const handleUploadClick = () => fileInputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
              if (event.target?.result) {
                  const newItem: InventoryItem = {
                      id: `custom-${Date.now()}`,
                      name: file.name.split('.')[0],
                      sci: 'Custom Upload',
                      price: 0,
                      category: 'Custom',
                      img: event.target.result as string
                  };
                  setInventory([newItem, ...inventory]);
                  setFilter('Custom'); // Switch to custom view to show the new item
              }
          };
          reader.readAsDataURL(file);
      }
  };

  // Calculations
  const totalPrice = useMemo(() => {
      const vesselPrice = 45; // Base price
      const itemsPrice = placedItems.reduce((sum, item) => sum + item.price, 0);
      return vesselPrice + itemsPrice;
  }, [placedItems]);

  // --- RENDER HELPERS ---

  const getVesselStyles = (type: VesselType) => {
      switch(type) {
          case 'ceramic': return 'bg-stone-300 rounded-b-3xl rounded-t-lg border-stone-400';
          case 'glass': return 'bg-blue-100/40 backdrop-blur-sm border-white/40 rounded-b-xl rounded-t-sm shadow-xl';
          case 'ikebana': return 'bg-primary h-12 w-64 rounded-full mt-32 border-primary';
          case 'organic': return 'bg-[#EAE7DF] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] border-stone-300 shadow-inner';
      }
  };

  return (
    <div className="flex flex-col h-full bg-raw-silk">
      {/* Header */}
      <header className="h-16 flex items-center justify-between border-b border-primary/20 bg-white px-8 z-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-8 rounded bg-raw-silk text-muted cursor-pointer hover:bg-surface hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold leading-none tracking-tight font-display">Untitled Commission 01</h2>
              <span className="material-symbols-outlined text-[16px] text-muted cursor-pointer hover:text-primary">edit</span>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-muted font-medium mt-1">Last edited Just now</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center h-9 px-4 rounded border border-primary/20 hover:bg-raw-silk text-primary text-xs font-bold uppercase tracking-wider transition-colors gap-2">
            <span className="material-symbols-outlined text-[16px]">file_upload</span>
            <span>Export Spec</span>
          </button>
          <button 
            onClick={onCheckout}
            className="flex items-center justify-center h-9 px-6 rounded bg-accent text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-dark transition-colors shadow-sm gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">save</span>
            <span>Save Commission</span>
          </button>
        </div>
      </header>

      {/* Workspace Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT COLUMN: Tools */}
        <aside className="w-[240px] flex flex-col border-r border-primary/20 bg-white overflow-hidden shrink-0 z-10">
          <div className="p-5 border-b border-primary/20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">Structure</h3>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar p-5 flex flex-col gap-8">
            
            {/* Vessel Selector */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-primary font-body">Vessel Type</span>
                <span className="material-symbols-outlined text-[16px] text-muted">filter_list</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setSelectedVessel('ceramic')}
                  className={`group relative flex flex-col items-center gap-2 p-3 rounded border transition-all ${selectedVessel === 'ceramic' ? 'border-accent bg-accent/5' : 'border-primary/20 bg-white hover:border-muted'}`}
                >
                  <Tooltip text="Hand-thrown stoneware with a matte glaze finish." />
                  <div className="h-12 w-full flex items-center justify-center">
                    <span className={`material-symbols-outlined text-3xl ${selectedVessel === 'ceramic' ? 'text-accent' : 'text-muted'}`}>local_cafe</span>
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${selectedVessel === 'ceramic' ? 'text-accent' : 'text-muted'}`}>Ceramic</span>
                </button>
                <button 
                  onClick={() => setSelectedVessel('glass')}
                   className={`group relative flex flex-col items-center gap-2 p-3 rounded border transition-all ${selectedVessel === 'glass' ? 'border-accent bg-accent/5' : 'border-primary/20 bg-white hover:border-muted'}`}
                >
                  <Tooltip text="Blown glass with subtle ripple texture." />
                  <div className="h-12 w-full flex items-center justify-center">
                    <span className={`material-symbols-outlined text-3xl ${selectedVessel === 'glass' ? 'text-accent' : 'text-muted'}`}>wine_bar</span>
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${selectedVessel === 'glass' ? 'text-accent' : 'text-muted'}`}>Glass</span>
                </button>
                <button 
                    onClick={() => setSelectedVessel('ikebana')}
                    className={`group relative flex flex-col items-center gap-2 p-3 rounded border border-primary/20 bg-white hover:border-muted cursor-pointer transition-all ${selectedVessel === 'ikebana' ? 'border-accent bg-accent/5' : 'border-primary/20 bg-white hover:border-muted'}`}
                >
                  <Tooltip text="Wide, shallow vessel for traditional arrangements." />
                  <div className="h-12 w-full flex items-center justify-center text-muted group-hover:text-primary">
                    <span className={`material-symbols-outlined text-3xl ${selectedVessel === 'ikebana' ? 'text-accent' : 'text-muted'}`}>filter_vintage</span>
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${selectedVessel === 'ikebana' ? 'text-accent' : 'text-muted'}`}>Ikebana</span>
                </button>
                <button 
                    onClick={() => setSelectedVessel('organic')}
                    className={`group relative flex flex-col items-center gap-2 p-3 rounded border border-primary/20 bg-white hover:border-muted cursor-pointer transition-all ${selectedVessel === 'organic' ? 'border-accent bg-accent/5' : 'border-primary/20 bg-white hover:border-muted'}`}
                >
                  <Tooltip text="Natural gourd shape with raw finish." />
                  <div className="h-12 w-full flex items-center justify-center text-muted group-hover:text-primary">
                    <span className={`material-symbols-outlined text-3xl ${selectedVessel === 'organic' ? 'text-accent' : 'text-muted'}`}>egg</span>
                  </div>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${selectedVessel === 'organic' ? 'text-accent' : 'text-muted'}`}>Organic</span>
                </button>
              </div>
            </div>

            {/* Mechanics */}
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold text-primary font-body">Mechanics</span>
              <div className="flex flex-col gap-2">
                <label 
                    onClick={() => setSelectedMechanic('wire')}
                    className={`relative flex items-center gap-3 p-2 rounded cursor-pointer group transition-colors ${selectedMechanic === 'wire' ? 'bg-accent/5' : 'hover:bg-raw-silk'}`}
                >
                  <Tooltip text="Structural support for free-form stems." position="right" />
                  <div className={`size-4 rounded border flex items-center justify-center ${selectedMechanic === 'wire' ? 'border-accent bg-accent' : 'border-muted'}`}>
                     {selectedMechanic === 'wire' && <span className="material-symbols-outlined text-[10px] text-white">check</span>}
                  </div>
                  <span className={`text-sm font-sans ${selectedMechanic === 'wire' ? 'text-accent font-bold' : 'text-primary/70'}`}>Chicken Wire</span>
                </label>
                <label 
                    onClick={() => setSelectedMechanic('frog')}
                    className={`relative flex items-center gap-3 p-2 rounded cursor-pointer group transition-colors ${selectedMechanic === 'frog' ? 'bg-accent/5' : 'hover:bg-raw-silk'}`}
                >
                  <Tooltip text="Weighted spiked base for precise stem placement." position="right" />
                  <div className={`size-4 rounded border flex items-center justify-center ${selectedMechanic === 'frog' ? 'border-accent bg-accent' : 'border-muted'}`}>
                     {selectedMechanic === 'frog' && <span className="material-symbols-outlined text-[10px] text-white">check</span>}
                  </div>
                  <span className={`text-sm font-sans ${selectedMechanic === 'frog' ? 'text-accent font-bold' : 'text-primary/70'}`}>Floral Frog (Kenzan)</span>
                </label>
                <label 
                    onClick={() => setSelectedMechanic('foam')}
                    className={`relative flex items-center gap-3 p-2 rounded cursor-pointer group transition-colors ${selectedMechanic === 'foam' ? 'bg-accent/5' : 'hover:bg-raw-silk'}`}
                >
                  <Tooltip text="Biodegradable retention foam for hydration." position="right" />
                  <div className={`size-4 rounded border flex items-center justify-center ${selectedMechanic === 'foam' ? 'border-accent bg-accent' : 'border-muted'}`}>
                     {selectedMechanic === 'foam' && <span className="material-symbols-outlined text-[10px] text-white">check</span>}
                  </div>
                  <span className={`text-sm font-sans ${selectedMechanic === 'foam' ? 'text-accent font-bold' : 'text-primary/70'}`}>Bio-Foam</span>
                </label>
              </div>
            </div>

            {/* Technical Info */}
            <div className="mt-auto pt-6 border-t border-primary/20 text-muted">
              <p className="text-[10px] uppercase tracking-wider mb-2 font-grotesk">Vessel Specs</p>
              <div className="flex justify-between text-xs font-mono">
                <span>Mat:</span>
                <span className="text-primary capitalize">{selectedVessel}</span>
              </div>
              <div className="flex justify-between text-xs font-mono mt-1">
                <span>Wgt:</span>
                <span className="text-primary">1.2kg</span>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER: Canvas */}
        <main className="flex-1 relative flex flex-col bg-surface overflow-hidden">
          {/* Controls */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <button onClick={handleRotate} className="size-10 bg-white rounded shadow-sm border border-primary/10 flex items-center justify-center hover:text-accent transition-colors">
                <span className="material-symbols-outlined">360</span>
            </button>
            <button onClick={handleZoomIn} className="size-10 bg-white rounded shadow-sm border border-primary/10 flex items-center justify-center hover:text-accent transition-colors">
                <span className="material-symbols-outlined">add</span>
            </button>
            <button onClick={handleZoomOut} className="size-10 bg-white rounded shadow-sm border border-primary/10 flex items-center justify-center hover:text-accent transition-colors">
                <span className="material-symbols-outlined">remove</span>
            </button>
            <button onClick={handleCenter} className="size-10 bg-white rounded shadow-sm border border-primary/10 flex items-center justify-center hover:text-accent transition-colors">
                <span className="material-symbols-outlined">center_focus_strong</span>
            </button>
          </div>
          
          {/* Harmony Tools Trigger */}
          <div className="absolute top-4 left-4 z-20">
            <button 
              onClick={onOpenPalette}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary/10 hover:border-accent transition-colors group"
            >
              <span className="material-symbols-outlined text-muted group-hover:text-accent text-[20px]">palette</span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-grotesk">Harmony Tools</span>
            </button>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 w-full h-full relative flex items-center justify-center perspective-1000 bg-dotted-grid overflow-hidden transition-all duration-300">
             {/* 3D Scene Mockup Container */}
             <div 
                className="relative w-[500px] h-[500px] flex items-center justify-center transform-style-3d transition-transform duration-700 ease-in-out"
                style={{
                    transform: `scale(${zoom}) rotateY(${rotation}deg)`
                }}
             >
                {/* Floor Shadow */}
                <div className="absolute bottom-10 w-64 h-24 bg-black/10 blur-xl rounded-full transform translate-y-12 rotate-x-90"></div>
                
                {/* Vessel */}
                <div className={`relative z-10 w-48 h-64 border shadow-inner flex flex-col overflow-hidden transition-all duration-500 ${getVesselStyles(selectedVessel)}`}>
                   
                   {/* Vessel Interior/Shader */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/10 opacity-80 pointer-events-none"></div>
                   
                   {/* Mechanics Overlay (Inside Vessel) */}
                   {selectedMechanic === 'wire' && <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/honey_im_subtle.png')] opacity-20 pointer-events-none"></div>}
                   {selectedMechanic === 'foam' && <div className="absolute bottom-0 w-full h-1/3 bg-green-800/20 pointer-events-none"></div>}
                   {selectedMechanic === 'frog' && <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-primary/20 rounded-sm pointer-events-none"></div>}
                </div>

                {/* Placed Stems Container */}
                <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 w-0 h-0 transform-style-3d">
                    {placedItems.length === 0 && (
                        <div className="absolute -top-32 -left-20 w-40 text-center text-primary/20 font-display text-2xl italic rotate-12 pointer-events-none select-none">
                            Drafting<br/>Canvas
                        </div>
                    )}
                    
                    {placedItems.map((item, index) => (
                        <div 
                            key={item.instanceId}
                            className="absolute bottom-0 left-1/2 w-48 h-64 origin-bottom transition-transform duration-500 cursor-grab active:cursor-grabbing group hover:z-50"
                            style={{
                                transform: `translateX(calc(-50% + ${item.xOffset}px)) rotate(${item.rotation}deg) scale(${item.scale})`,
                                zIndex: 20 + index
                            }}
                        >
                            <div className="absolute bottom-0 left-1/2 w-1 h-full bg-green-900/80 rounded-full"></div>
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 object-contain drop-shadow-xl" 
                            />
                            {/* Remove Button on Hover */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleRemoveItem(item.instanceId); }}
                                className="absolute top-0 right-8 size-6 bg-white rounded-full text-accent opacity-0 group-hover:opacity-100 shadow-sm border border-accent flex items-center justify-center hover:scale-110 transition-all z-50"
                            >
                                <span className="material-symbols-outlined text-[14px]">close</span>
                            </button>
                        </div>
                    ))}
                </div>

             </div>

             {/* Spec Footer */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-6 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-primary/10">
                    <div className="flex flex-col items-center">
                        <span className="text-[9px] uppercase tracking-widest text-muted font-bold font-grotesk">Count</span>
                        <span className="text-sm font-mono font-medium text-primary">{placedItems.length}<span className="text-[10px] ml-0.5">stems</span></span>
                    </div>
                    <div className="w-px h-6 bg-primary/20"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[9px] uppercase tracking-widest text-muted font-bold font-grotesk">Width</span>
                        <span className="text-sm font-mono font-medium text-primary">{(30 + placedItems.length * 2).toFixed(0)}<span className="text-[10px] ml-0.5">cm</span></span>
                    </div>
                    <div className="w-px h-6 bg-primary/20"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-[9px] uppercase tracking-widest text-muted font-bold font-grotesk">Total</span>
                        <span className="text-sm font-mono font-medium text-accent">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
             </div>
          </div>
        </main>

        {/* RIGHT COLUMN: Inventory */}
        <aside className="w-[320px] flex flex-col border-l border-primary/20 bg-white overflow-hidden shrink-0 z-10">
          <div className="p-5 border-b border-primary/20 flex justify-between items-center">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted">Botanicals</h3>
            <span className="text-xs font-mono text-accent font-bold">{placedItems.length} SELECTED</span>
          </div>
          
          {/* Search */}
          <div className="p-4 border-b border-primary/20 bg-raw-silk/20">
             <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-[18px]">search</span>
                <input 
                    type="text" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search stems..." 
                    className="w-full h-10 pl-10 pr-4 rounded bg-white border border-primary/20 text-sm focus:border-accent focus:ring-0 placeholder:text-muted/50 font-body transition-colors" 
                />
             </div>
             <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                {['All', 'Fresh', 'Dried', 'Foliage', 'Custom'].map((cat, i) => (
                    <button 
                        key={cat} 
                        onClick={() => setFilter(cat as CategoryType)}
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${filter === cat ? 'bg-primary text-white' : 'bg-raw-silk text-muted hover:bg-surface'}`}
                    >
                        {cat}
                    </button>
                ))}
             </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-3">
             {filteredInventory.map((item) => (
                <div key={item.id} className="group flex items-center gap-3 p-2 rounded border border-primary/10 bg-white hover:border-accent/30 hover:shadow-sm cursor-pointer transition-all" onClick={() => handleAddItem(item)}>
                    <div className="size-12 rounded bg-raw-silk overflow-hidden shrink-0 relative">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-primary truncate font-body">{item.name}</p>
                        <p className="text-xs text-muted italic truncate font-body">{item.sci}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-mono font-bold text-primary">${item.price.toFixed(2)}</span>
                        <button className="size-6 rounded-full bg-raw-silk flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-[14px]">add</span>
                        </button>
                    </div>
                </div>
             ))}
             {filteredInventory.length === 0 && (
                 <div className="text-center py-8 text-muted text-xs uppercase tracking-widest">No botanicals found</div>
             )}
          </div>

          <div className="p-4 border-t border-primary/20 bg-white">
            <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange} 
            />
            <button 
                onClick={handleUploadClick}
                className="w-full flex items-center justify-center gap-2 h-12 rounded border-2 border-dashed border-primary/20 text-muted hover:border-accent hover:text-accent transition-all group"
            >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
                <span className="text-xs font-bold uppercase tracking-widest font-grotesk">Custom Upload</span>
            </button>
          </div>
        </aside>

      </div>
    </div>
  );
};

const Tooltip: React.FC<{text: string; position?: 'top' | 'right'}> = ({text, position = 'top'}) => (
    <div className={`absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none w-40 p-2 bg-primary text-raw-silk text-[10px] leading-tight text-center font-grotesk tracking-wide shadow-xl border border-white/10 ${position === 'top' ? 'bottom-full mb-3 left-1/2 -translate-x-1/2' : 'left-full ml-3 top-1/2 -translate-y-1/2'}`}>
        {text}
        {position === 'top' ? (
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
        ) : (
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-primary"></div>
        )}
    </div>
);

export default Composer;