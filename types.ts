
import React from 'react';

export interface Heritage {
  id: string;
  name: string;
  description: string;
  location: { top: string; left: string };
  damagedImg: string;
  restoredImg: string;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface GameContextType {
  selectedHeritage: Heritage | null;
  selectHeritage: (heritage: Heritage | null) => void;
  isRestored: boolean;
  setRestored: (status: boolean) => void;
}
