import { useState } from 'react';
import { channels } from './data/channels';
import { quotes } from './data/quotes';
import { projects } from './data/projects';
import { useChannelSwitch } from './hooks/useChannelSwitch';
import { useKeyboard } from './hooks/useKeyboard';
import { useTVSound } from './hooks/useTVSound';
import { Navigation } from './components/Layout/Navigation';
import { TVShell } from './components/TV/TVShell';
import { TVScreen } from './components/TV/TVScreen';


import { PowerOnQuote } from './components/TV/PowerOnQuote';

import { ChannelTransition } from './components/TV/ChannelTransition';
import { ChannelGallery } from './components/Channel/ChannelGallery';
import { TuneInPlaceholder } from './components/TV/TuneInPlaceholder';

import { ToolModal } from './components/ToolLab/ToolModal';
import { Work } from './components/Layout/Work';
import { About } from './components/Layout/About';
import { Contact } from './components/Layout/Contact';
import { Modal } from './components/shared/Modal';
import { ChannelInfo } from './components/Channel/ChannelInfo';
import type { Tool } from './data/types';

import { SnowEffect } from './components/shared/SnowEffect';

function App() {
  const {
    currentChannel: channelIndex,
    isPoweredOn,
    isTurningOff, // Destructure this
    isTransitioning,
    nextChannel,
    prevChannel,
    goToChannel,

    togglePower,
    showPowerOnQuote,
    currentQuote,
  } = useChannelSwitch(channels.length);

  const { playStatic, playClick, playSwitch } = useTVSound();

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isTuneInOpen, setIsTuneInOpen] = useState(false);
  const [isChannelListOpen, setIsChannelListOpen] = useState(false);
  const [isChannelInfoOpen, setIsChannelInfoOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const activeChannel = channels[channelIndex];
  const activeProjects = projects[activeChannel.id] || [];
  const isToolLab = activeChannel.id === 'ch-07';

  // Sound Wrappers
  const handleNextChannel = () => {
    playStatic();
    nextChannel();
  };

  const handlePrevChannel = () => {
    playStatic();
    prevChannel();
  };

  const handleTogglePower = () => {
    playSwitch();
    togglePower();
  };

  const handleGoToChannel = (idx: number) => {
    playStatic();
    goToChannel(idx);
  };

  useKeyboard({
    ArrowUp: handlePrevChannel,
    ArrowDown: handleNextChannel,
    Enter: () => {
      playSwitch();
      if (!isToolLab) {
        setIsTuneInOpen(true);
      }
    },
    Escape: () => {
      playClick();
      setIsGalleryOpen(false);
      setIsTuneInOpen(false);
      setIsChannelListOpen(false);
      setIsChannelInfoOpen(false);
      setSelectedTool(null);
    },
  });

  const handleTuneIn = () => {
    playSwitch();
    if (isToolLab) {
      const toolSection = document.getElementById('tool-lab');
      if (toolSection) {
        toolSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsTuneInOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/50 selection:text-black font-sans overflow-x-hidden relative">
      {/* Subtle Texture - optional, keep it very dark */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 z-0" />

      {/* Winter Snow Effect */}
      <SnowEffect />

      <Navigation />

      <main>
        {/* TV Section */}
        <section className="pt-20 pb-0 flex flex-col items-center">
          <TVShell
            isPoweredOn={isPoweredOn}
            onChannelUp={handleNextChannel}
            onChannelDown={handlePrevChannel}
            onTogglePower={handleTogglePower}
            onVolumeClick={() => {
              playClick();
              console.log('Volume knob clicked');
            }}
          >
            <TVScreen
              channel={activeChannel}
              isPoweredOn={isPoweredOn}
              isTurningOff={isTurningOff}
              onExplore={handleTuneIn}
              onTurnOn={handleTogglePower}
            />
            <PowerOnQuote
              isVisible={showPowerOnQuote && isPoweredOn}
              quote={currentQuote}
              author={quotes.find(q => q.text === currentQuote)?.author}
            />
            <ChannelTransition isTransitioning={isTransitioning} />
          </TVShell>


        </section>



        <Work />
        <About />
        <Contact />
      </main>



      {/* Overlays */}
      <TuneInPlaceholder
        isOpen={isTuneInOpen}
        onClose={() => setIsTuneInOpen(false)}
      />

      <ChannelGallery
        isOpen={isGalleryOpen && !isToolLab}
        onClose={() => setIsGalleryOpen(false)}
        channel={activeChannel}
        projects={activeProjects}
      />

      <ToolModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

      <Modal
        isOpen={isChannelInfoOpen}
        onClose={() => setIsChannelInfoOpen(false)}
        title="Channel Information"
      >
        <ChannelInfo channel={activeChannel} />
      </Modal>

      <Modal
        isOpen={isChannelListOpen}
        onClose={() => setIsChannelListOpen(false)}
        title="Channel Directory"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => {
                handleGoToChannel(idx);
                setIsChannelListOpen(false);
              }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${idx === channelIndex
                ? 'bg-white/10 border-white/20'
                : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
            >
              <div className="text-2xl font-mono font-bold text-slate-500">{ch.number}</div>
              <div className="text-left">
                <div className="text-sm font-bold text-white uppercase tracking-tight">{ch.name}</div>
                <div className="text-[10px] text-slate-500 uppercase">{ch.description.slice(0, 40)}...</div>
              </div>
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
