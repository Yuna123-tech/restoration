import React, { useState, useCallback } from 'react';
import { GameStage } from './types';
import Stage1Dusting from './components/Stage1Dusting';
import Stage2Assembling from './components/Stage2Assembling';
import Stage3Mending from './components/Stage3Mending';
import CompletionScreen from './components/CompletionScreen';
import IntroScreen from './components/IntroScreen';
import { PotteryShelfBackground } from './components/PotteryAssets';

const App: React.FC = () => {
  const [stage, setStage] = useState<GameStage>(GameStage.Intro);

  const handleNextStage = useCallback(() => {
    setStage(prevStage => prevStage + 1);
  }, []);

  const handleRestart = useCallback(() => {
    setStage(GameStage.Intro);
  }, []);

  const renderStage = () => {
    switch (stage) {
      case GameStage.Intro:
        return <IntroScreen onStart={handleNextStage} />;
      case GameStage.Dusting:
        return <Stage1Dusting onComplete={handleNextStage} />;
      case GameStage.Assembling:
        return <Stage2Assembling onComplete={handleNextStage} />;
      case GameStage.Mending:
        return <Stage3Mending onComplete={handleNextStage} />;
      case GameStage.Completed:
        return <CompletionScreen onRestart={handleRestart} />;
      default:
        return <IntroScreen onStart={handleNextStage} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
      <PotteryShelfBackground />
      <div className="relative z-10 flex flex-col items-center w-full">
        <header className="w-full max-w-4xl text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)'}}>국가유산 복원 게임</h1>
          <h2 className="text-2xl md:text-3xl text-amber-200 mt-1" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>고려청자 편</h2>
        </header>
        <main className="w-full max-w-4xl bg-gradient-to-b from-[#6b4226] to-[#4a2c13] rounded-xl shadow-2xl p-6 md:p-8 border-b-8 border-[#4a2c13]">
          {renderStage()}
        </main>
        <footer className="mt-8 text-center text-amber-200/80" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          <p>초등학교 4학년 대상 교육용 게임</p>
        </footer>
      </div>
    </div>
  );
};

export default App;