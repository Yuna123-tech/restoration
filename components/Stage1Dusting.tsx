import React, { useState, useEffect } from 'react';
import { CeladonBroken } from './CeladonAssets';
import { BrushIcon } from './icons';

interface Stage1DustingProps {
  onComplete: () => void;
}

const DUST_SPOTS = [
  { top: '25%', left: '45%' },
  { top: '40%', left: '65%' },
  { top: '55%', left: '25%' },
  { top: '75%', left: '55%' },
  { top: '80%', left: '40%' },
];

const DustMote: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <radialGradient id="dustGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor: '#a1887f', stopOpacity: 0}} />
                <stop offset="40%" style={{stopColor: '#a1887f', stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: '#a1887f', stopOpacity: 0.6}} />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#dustGradient)" />
    </svg>
);


const Stage1Dusting: React.FC<Stage1DustingProps> = ({ onComplete }) => {
  const [cleanedSpots, setCleanedSpots] = useState<boolean[]>(Array(DUST_SPOTS.length).fill(false));

  const handleClean = (index: number) => {
    const newCleanedSpots = [...cleanedSpots];
    newCleanedSpots[index] = true;
    setCleanedSpots(newCleanedSpots);
  };

  const allCleaned = cleanedSpots.every(spot => spot);

  useEffect(() => {
    if (allCleaned) {
      console.log('All dust cleaned!');
    }
  }, [allCleaned]);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-amber-100">1단계: 먼지 털기</h3>
        <p className="text-amber-200 mt-2">붓으로 먼지를 살살 털어주세요.</p>
      </div>

      <div className="relative w-80 h-80">
        <CeladonBroken />
        {DUST_SPOTS.map((pos, index) =>
          !cleanedSpots[index] && (
            <div
              key={index}
              className="absolute w-12 h-12 cursor-pointer transition-transform duration-300 hover:scale-125 opacity-70 hover:opacity-100"
              style={{ top: pos.top, left: pos.left }}
              onClick={() => handleClean(index)}
              role="button"
              aria-label={`먼지 ${index + 1} 털기`}
            >
              <DustMote />
            </div>
          )
        )}
      </div>

      <div className="mt-8 text-center h-16">
        {allCleaned ? (
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-700 animate-pulse shadow-md"
          >
            다음 단계로
          </button>
        ) : (
          <div className="flex items-center justify-center text-lg text-amber-100">
            <BrushIcon className="w-6 h-6 mr-2" />
            <span>남은 먼지: {cleanedSpots.filter(c => !c).length}개</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stage1Dusting;