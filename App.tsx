import React, { useState } from 'react';
import { ViewState } from './types';
import Sidebar from './components/Sidebar';
import Gallery from './screens/Gallery';
import Composer from './screens/Composer';
import Ledger from './screens/Ledger';
import Profile from './screens/Profile';
import Archive from './screens/Archive';
import Contact from './screens/Contact';
import PaletteModal from './components/PaletteModal';
import SearchModal from './components/SearchModal';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('GALLERY');
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<'PRIVACY' | 'TERMS' | null>(null);

  // Simple render switch
  const renderView = () => {
    switch (currentView) {
      case 'GALLERY':
        return <Gallery onViewComposer={() => setCurrentView('COMPOSER')} onViewArchive={() => setCurrentView('ARCHIVE')} />;
      case 'ARCHIVE':
        return <Archive onBack={() => setCurrentView('GALLERY')} />;
      case 'COMPOSER':
        return <Composer onOpenPalette={() => setIsPaletteOpen(true)} onCheckout={() => setCurrentView('LEDGER')} />;
      case 'LEDGER':
        return <Ledger />;
      case 'PROFILE':
        return <Profile onContact={() => setCurrentView('CONTACT')} />;
      case 'CONTACT':
        return <Contact onBack={() => setCurrentView('PROFILE')} />;
      default:
        return <Gallery onViewComposer={() => setCurrentView('COMPOSER')} onViewArchive={() => setCurrentView('ARCHIVE')} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-raw-silk text-primary overflow-hidden relative">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        onSearch={() => setIsSearchOpen(true)}
        onLegal={(type) => setActiveLegalDoc(type)}
      />
      
      {/* Main Content Area */}
      <main className="flex-1 h-full w-full overflow-hidden relative">
        {renderView()}
      </main>

      {/* Overlays */}
      {isPaletteOpen && (
        <PaletteModal onClose={() => setIsPaletteOpen(false)} />
      )}
      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}
      {activeLegalDoc && (
        <LegalModal type={activeLegalDoc} onClose={() => setActiveLegalDoc(null)} />
      )}
    </div>
  );
};

export default App;