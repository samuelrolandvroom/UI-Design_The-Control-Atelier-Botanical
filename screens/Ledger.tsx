import React, { useState } from 'react';

const Ledger: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('PROCESSING');
      // Simulate network request
      setTimeout(() => {
          setStatus('SUCCESS');
      }, 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden relative">
      {/* LEFT PANEL: THE MANIFEST (60%) */}
      <section className="flex-1 lg:flex-[0.6] bg-raw-silk flex flex-col overflow-y-auto relative p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-primary/10 transition-all duration-1000">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
            <span className="font-display text-[150px] leading-none text-primary">Nº</span>
        </div>
        
        <header className="mb-12 z-10">
            <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-12 bg-primary"></span>
                <span className="text-xs font-grotesk uppercase tracking-widest text-muted">Order Summary</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl text-primary leading-tight">
                Commission <br/>Manifest Nº 8492
            </h1>
        </header>

        {/* The List */}
        <div className="flex-1 flex flex-col gap-8 z-10">
            <div className="flex flex-col gap-4 font-grotesk text-lg lg:text-xl">
                <LineItem qty="05" name="White Anemone (Coronaria)" price="$45.00" />
                <LineItem qty="03" name="Hellebore 'Onyx Odyssey'" price="$36.00" />
                <LineItem qty="02" name="Dried Eucalyptus (Gunni)" price="$18.00" />
                <LineItem qty="01" name="Ceramic Vessel (Matte Slate)" price="$80.00" highlight />
                
                <div className="flex items-baseline w-full group text-muted text-base mt-2">
                    <span className="italic">Processing & Handling</span>
                    <div className="flex-grow mx-4 border-b border-dotted border-primary/30 relative top-[-4px]"></div>
                    <span>$12.00</span>
                </div>
            </div>

            {/* Visual Anchor */}
            <div className="mt-auto pt-12 flex justify-center items-center relative">
                <div className="absolute w-64 h-64 rounded-full bg-surface blur-3xl -z-10"></div>
                <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-primary/5">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRIehZs-3k6zd98OcOXEqkxCO8HOhkBAOQc7jcRiKyWRF8Ytr0sygeSkum1NNusxP32T24cEasfQ8VgsS8xh_nUL3p1qJeTeuJmH729zFmwMb_ac49Gm8c8TlOa6Ua8GjWQsKpztZd76eh8NNvNWwsdVolfcCRu4U8gjlWl1GbCtpXm-QQwpp-xrPkB5Cm2mqyhIUjtLk-VwPWloqmcyTMN-hIGQB07aK4jYwFGzrpj5kNZnLDwRgnXpu7dQNl-Ve-r3P2t_QKODDg" alt="Final Composition" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-2 left-2 bg-raw-silk/90 px-2 py-1 backdrop-blur-sm border border-primary/10">
                        <span className="text-[10px] font-mono tracking-wider text-primary">FIG. 1.0 — FINAL COMPOSITION</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* RIGHT PANEL: BILLING (40%) */}
      <section className="flex-1 lg:flex-[0.4] bg-[#F8F6F6] flex flex-col overflow-y-auto p-8 lg:p-12 relative shadow-inner overflow-x-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#2C2C2B 1px, transparent 1px)', backgroundSize: '100% 3rem'}}></div>
        
        {/* SUCCESS STATE OVERLAY */}
        <div className={`absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#F8F6F6] transition-all duration-1000 ${status === 'SUCCESS' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
            <div className="flex flex-col items-center text-center gap-6 max-w-sm">
                 {/* Wax Seal Graphic */}
                 <div className="size-24 rounded-full bg-accent shadow-lg flex items-center justify-center relative mb-4">
                     <div className="absolute inset-2 border border-white/20 rounded-full"></div>
                     <span className="font-display text-4xl text-white/90 font-bold">AB</span>
                 </div>
                 
                 <h2 className="font-display text-3xl text-primary">Order<br/>Confirmed</h2>
                 <p className="font-mono text-xs text-muted leading-relaxed">
                     Your request has been dispatched to the studio. <br/>
                     Reference Nº 8492.
                 </p>
                 <div className="w-full h-px bg-primary/10 my-4"></div>
                 <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent pb-1">
                     Return to Gallery
                 </button>
            </div>
        </div>


        <div className={`relative z-10 flex flex-col h-full max-w-lg mx-auto w-full transition-all duration-700 ${status === 'SUCCESS' ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100'}`}>
            <div className="mb-10 flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="font-display text-2xl text-primary">Billing Details</span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-widest mt-1">Ref: 2025-OCT-24-A</span>
                </div>
                <span className="material-symbols-outlined text-3xl text-primary font-light">draft</span>
            </div>

            <form className="flex-1 flex flex-col gap-10" onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] text-muted font-bold border-b border-primary/10 pb-2">Client Details</h3>
                    <div className="grid grid-cols-1 gap-6">
                        <InputGroup label="Full Name" placeholder="e.g. Eleanor Rigby" />
                        <InputGroup label="Email Address" placeholder="e.g. eleanor@studio.com" type="email" />
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] text-muted font-bold border-b border-primary/10 pb-2">Shipping Address</h3>
                    <div className="grid grid-cols-1 gap-6">
                        <InputGroup label="Street Address" placeholder="e.g. 12 Rue de la Paix" />
                        <div className="grid grid-cols-2 gap-6">
                            <InputGroup label="City" placeholder="Paris" />
                            <InputGroup label="Postal Code" placeholder="75002" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] text-muted font-bold border-b border-primary/10 pb-2">Payment Method</h3>
                    <InputGroup label="Card Number" placeholder="0000 0000 0000 0000" icon="credit_card" />
                    <div className="grid grid-cols-2 gap-6">
                        <InputGroup label="Expiry" placeholder="MM/YY" />
                        <InputGroup label="CVC" placeholder="123" />
                    </div>
                </div>

                <div className="mt-auto pt-10 border-t border-primary">
                    <div className="flex flex-col items-end gap-2 mb-8">
                        <span className="font-grotesk text-xs uppercase tracking-widest text-primary">Total Due</span>
                        <span className="font-display font-bold text-6xl lg:text-7xl text-accent leading-none">$191.00</span>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'PROCESSING'}
                        className="group w-full relative overflow-hidden bg-transparent border border-primary py-5 px-6 transition-all duration-300 hover:bg-accent hover:border-accent disabled:opacity-50 disabled:cursor-wait"
                    >
                        <span className="relative z-10 flex items-center justify-between w-full">
                            <span className="font-grotesk uppercase tracking-[0.2em] text-sm font-bold text-primary group-hover:text-white transition-colors">
                                {status === 'PROCESSING' ? 'Processing...' : 'Process Payment'}
                            </span>
                            <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors transform group-hover:translate-x-1 duration-300">east</span>
                        </span>
                    </button>
                    <p className="text-center mt-4 font-mono text-[10px] text-muted">
                        By confirming, you agree to the Terms of Artistry & Preservation.
                    </p>
                </div>
            </form>
        </div>
      </section>
    </div>
  );
};

const LineItem: React.FC<{qty: string; name: string; price: string; highlight?: boolean}> = ({qty, name, price, highlight}) => (
    <div className={`flex items-baseline w-full group ${highlight ? 'text-accent' : ''}`}>
        <span className="font-medium">{qty} <span className={`${highlight ? 'text-accent/60' : 'text-muted'} font-light mx-2`}>x</span> {name}</span>
        <div className={`flex-grow mx-4 border-b border-dotted ${highlight ? 'border-accent/30' : 'border-primary/30'} relative top-[-4px]`}></div>
        <span className="font-medium">{price}</span>
    </div>
);

const InputGroup: React.FC<{label: string; placeholder: string; type?: string; icon?: string}> = ({label, placeholder, type = "text", icon}) => (
    <div className="relative group">
        <label className="block font-grotesk text-[10px] uppercase tracking-wider text-primary/60 mb-1">{label}</label>
        <div className="relative">
            <input 
                type={type} 
                className="w-full bg-transparent border-0 border-b border-primary/40 focus:border-accent focus:ring-0 px-0 py-2 font-mono text-primary placeholder-primary/30 text-sm transition-colors focus:bg-primary/5" 
                placeholder={placeholder}
            />
            {icon && <span className="material-symbols-outlined absolute right-0 top-1 text-primary/40 text-lg">{icon}</span>}
        </div>
    </div>
);

export default Ledger;