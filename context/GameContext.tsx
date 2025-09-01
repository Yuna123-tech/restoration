
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Heritage, GameContextType } from '../types';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedHeritage, setSelectedHeritage] = useState<Heritage | null>(null);
  const [isRestored, setIsRestored] = useState(false);

  const selectHeritage = (heritage: Heritage | null) => {
    setSelectedHeritage(heritage);
    setIsRestored(false); // Reset restored status when new heritage is selected
  };

  const setRestored = (status: boolean) => {
    setIsRestored(status);
  };

  return (
    <GameContext.Provider value={{ selectedHeritage, selectHeritage, isRestored, setRestored }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
