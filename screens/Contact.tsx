import React, { useState } from 'react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    setTimeout(() => {
      setStatus('SENT');
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-raw-silk overflow-y-auto animate-in slide-in-from-right-8 duration-700">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-raw-silk/95 backdrop-blur-sm border-b border-primary/10 w-full px-8 py-6 flex justify-between items-center">
        <div>
            <h1 className="font-display text-3xl text-primary">The Studio</h1>
            <p className="font-mono text-xs text-muted mt-1 uppercase tracking-widest">Inquiries & Commissions</p>
        </div>
        <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
        >
            <span className="material-symbols-outlined text-sm">close</span>
            <span>Close</span>
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full">
        
        {/* Left: Info & Aesthetic */}
        <div className="w-full md:w-1/3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-primary/10 space-y-12">
            <div className="space-y-6">
                <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-primary/10 pb-2">Visit</h3>
                <div className="font-body text-primary leading-relaxed">
                    <p>Atelier Botanical</p>
                    <p>12 Rue de la Paix</p>
                    <p>75002 Paris, France</p>
                </div>
                <div className="h-48 w-full bg-surface relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-primary/10">
                     <img src="https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Location Map" />
                     <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                     <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[10px] font-mono text-primary backdrop-blur-sm border border-primary/10">FIG 1. LOCATION MAP</div>
                     {/* Map Pin */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <span className="material-symbols-outlined text-accent text-3xl drop-shadow-md">location_on</span>
                        <span className="bg-primary text-white text-[9px] px-1 py-0.5 mt-1 font-bold tracking-widest uppercase">Atelier</span>
                     </div>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="font-grotesk text-xs uppercase tracking-[0.2em] font-bold text-muted border-b border-primary/10 pb-2">Connect</h3>
                <div className="font-mono text-sm space-y-2">
                    <p><span className="text-muted w-20 inline-block">Email:</span> <a href="#" className="text-primary hover:text-accent border-b border-transparent hover:border-accent transition-all">bonjour@atelier.com</a></p>
                    <p><span className="text-muted w-20 inline-block">Phone:</span> <span className="text-primary">+33 1 42 60 31 29</span></p>
                    <p><span className="text-muted w-20 inline-block">Insta:</span> <a href="#" className="text-primary hover:text-accent border-b border-transparent hover:border-accent transition-all">@atelier.botanical</a></p>
                </div>
            </div>
            
            <div className="p-6 bg-primary text-raw-silk">
                <p className="font-display text-xl mb-2">"Architecture in bloom."</p>
                <p className="text-xs text-white/60 font-mono">We accept large scale event commissions up to 18 months in advance.</p>
            </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-2/3 p-8 md:p-12 relative overflow-hidden">
            {status === 'SENT' ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-raw-silk z-20 animate-in fade-in duration-500">
                    <div className="size-24 rounded-full bg-accent shadow-lg flex items-center justify-center relative mb-6">
                        <div className="absolute inset-2 border border-white/20 rounded-full"></div>
                        <span className="font-display text-4xl text-white/90 font-bold">AB</span>
                    </div>
                    <h2 className="font-display text-3xl text-primary mb-2">Message Received</h2>
                    <p className="font-body text-muted text-center max-w-md">Thank you. Our studio manager will review your inquiry and respond within 24 hours.</p>
                    <button onClick={() => setStatus('IDLE')} className="mt-8 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">Send Another</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <InputGroup label="First Name" placeholder="Jane" />
                        <InputGroup label="Last Name" placeholder="Doe" />
                    </div>
                    
                    <InputGroup label="Email Address" placeholder="jane@example.com" type="email" />
                    
                    <div className="space-y-2">
                        <label className="block font-grotesk text-[10px] uppercase tracking-wider text-primary/60">Inquiry Type</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['General', 'Wedding', 'Editorial', 'Install'].map((type) => (
                                <label key={type} className="flex items-center justify-center py-3 border border-primary/20 cursor-pointer hover:border-primary hover:bg-white transition-all has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:border-primary">
                                    <input type="radio" name="type" className="hidden" />
                                    <span className="text-xs uppercase tracking-wider font-bold">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block font-grotesk text-[10px] uppercase tracking-wider text-primary/60">Message</label>
                        <textarea 
                            rows={6}
                            className="w-full bg-transparent border border-primary/20 p-4 font-body text-primary placeholder-primary/30 text-sm transition-colors focus:border-accent focus:ring-0 focus:bg-white/50 resize-none"
                            placeholder="Tell us about your vision..."
                        ></textarea>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                        <p className="text-[10px] text-muted max-w-[200px]">By submitting, you agree to our privacy policy regarding data collection.</p>
                        <button 
                            type="submit"
                            disabled={status === 'SENDING'}
                            className="h-12 px-8 bg-accent text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-wait shadow-sm flex items-center gap-2"
                        >
                            {status === 'SENDING' ? 'Sending...' : 'Send Inquiry'}
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

const InputGroup: React.FC<{label: string; placeholder: string; type?: string}> = ({label, placeholder, type = "text"}) => (
    <div className="space-y-2">
        <label className="block font-grotesk text-[10px] uppercase tracking-wider text-primary/60">{label}</label>
        <input 
            type={type} 
            className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-accent focus:ring-0 px-0 py-3 font-body text-primary placeholder-primary/30 text-lg transition-colors focus:bg-primary/5" 
            placeholder={placeholder}
        />
    </div>
);

export default Contact;