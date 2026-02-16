import React from 'react';

interface LegalModalProps {
  type: 'PRIVACY' | 'TERMS';
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-[80] flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
        <div className="w-full max-w-lg bg-raw-silk h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-primary/10">
                <h2 className="font-display text-2xl text-primary">{type === 'PRIVACY' ? 'Privacy Policy' : 'Terms of Artistry'}</h2>
                <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 font-body text-sm leading-relaxed text-primary/80 space-y-6">
                <p>
                    <strong>1. The Ephemeral Nature of the Work.</strong><br/>
                    By commissioning a botanical arrangement from Atelier Botanical, the Client acknowledges that flowers are living, breathing entities. They will wilt, they will fade, and they will eventually return to the earth. This transience is not a flaw, but a feature of the medium.
                </p>
                <p>
                    <strong>2. Artistic License.</strong><br/>
                    While we strive to adhere to the requested palette and mood, Mother Nature dictates availability. The Atelier reserves the right to substitute stems of equal or greater value and aesthetic weight without prior notice, ensuring the structural integrity of the composition remains paramount.
                </p>
                <p>
                    <strong>3. Preservation & Care.</strong><br/>
                    Upon delivery, the guardianship of the composition transfers to the Client. We provide specific hydration and lighting protocols. Negligence in following these protocols voids any guarantee of longevity.
                </p>
                <p>
                    <strong>4. Digital Footprint.</strong><br/>
                    Data collected during the commission process (including address and payment details) is stored securely on encrypted servers. We do not sell, trade, or share your personal data.
                </p>
                <div className="h-px w-full bg-primary/10 my-8"></div>
                <p className="font-mono text-xs text-muted">
                    Last Updated: October 24, 2025 <br/>
                    Legal Ref: AB-2025-LEG
                </p>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-primary/10 bg-white">
                <button onClick={onClose} className="w-full py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                    I Acknowledge
                </button>
            </div>
        </div>
    </div>
  );
};

export default LegalModal;