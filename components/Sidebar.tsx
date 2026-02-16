import React from 'react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  onSearch: () => void;
  onLegal: (type: 'PRIVACY' | 'TERMS') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, onSearch, onLegal }) => {
  return (
    <nav className="h-full w-[80px] border-r border-primary/20 flex flex-col justify-between items-center py-8 z-50 bg-raw-silk shrink-0">
      {/* Logo */}
      <div className="flex flex-col items-center gap-1 group cursor-pointer" onClick={() => onViewChange('GALLERY')}>
        <h1 className="font-display text-2xl font-bold tracking-widest text-primary">AB</h1>
        <span className="w-px h-8 bg-primary/20 group-hover:h-12 transition-all duration-500 ease-out"></span>
      </div>

      {/* Main Menu (Rotated) */}
      <div className="flex flex-col gap-12 items-center flex-1 justify-center">
        <NavButton 
          label="GALLERY" 
          isActive={currentView === 'GALLERY'} 
          onClick={() => onViewChange('GALLERY')} 
        />
        <NavButton 
          label="COMPOSER" 
          isActive={currentView === 'COMPOSER'} 
          onClick={() => onViewChange('COMPOSER')} 
        />
        <NavButton 
          label="PROFILE" 
          isActive={currentView === 'PROFILE'} 
          onClick={() => onViewChange('PROFILE')} 
        />
      </div>

      {/* Footer Icons */}
      <div className="flex flex-col gap-6 items-center">
        <button 
          onClick={onSearch}
          className="text-primary/60 hover:text-accent transition-colors w-10 h-10 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
        </button>
        <div className="w-4 h-px bg-primary/20"></div>
        <div className="flex flex-col gap-4">
          <button onClick={() => onLegal('PRIVACY')} className="writing-vertical-rl rotate-180 text-[10px] uppercase text-primary/40 hover:text-primary transition-colors font-grotesk tracking-widest cursor-pointer">Privacy</button>
          <button onClick={() => onLegal('TERMS')} className="writing-vertical-rl rotate-180 text-[10px] uppercase text-primary/40 hover:text-primary transition-colors font-grotesk tracking-widest cursor-pointer">Terms</button>
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`writing-vertical-rl rotate-180 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 relative group w-6 flex items-center justify-center
        ${isActive ? 'text-primary font-bold' : 'text-primary/40 hover:text-primary'}
      `}
    >
      {label}
      {isActive && (
        <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full"></span>
      )}
    </button>
  );
};

export default Sidebar;