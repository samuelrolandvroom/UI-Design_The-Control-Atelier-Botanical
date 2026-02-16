import React, { useEffect, useRef } from 'react';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-[70] bg-primary/95 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
       <button onClick={onClose} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-4xl font-light">close</span>
       </button>

       <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full px-8">
            <label className="text-white/40 font-grotesk text-xs uppercase tracking-[0.3em] mb-4">Search The Archive</label>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Type to search..." 
                className="w-full bg-transparent border-b-2 border-white/20 text-4xl md:text-6xl text-white font-display placeholder:text-white/10 focus:outline-none focus:border-accent pb-4 text-center transition-colors"
            />
            
            <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-forwards">
                <div className="col-span-1 md:col-span-3 text-center mb-4">
                    <span className="text-white/30 text-xs font-mono">Suggested Collections</span>
                </div>
                
                {['Architectural Vases', 'Dried Botanicals', 'Ikebana Essentials'].map((item) => (
                    <div key={item} className="border border-white/10 p-6 flex flex-col gap-4 hover:bg-white/5 cursor-pointer transition-colors group">
                        <span className="material-symbols-outlined text-white/40 group-hover:text-accent">arrow_outward</span>
                        <span className="text-white font-body text-lg group-hover:text-accent transition-colors">{item}</span>
                    </div>
                ))}
            </div>
       </div>
    </div>
  );
};

export default SearchModal;