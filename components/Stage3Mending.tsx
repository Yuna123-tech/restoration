import React, { useState } from 'react';
import { CeladonCracked } from './CeladonAssets';
import { SparklesIcon } from './icons';

interface Stage3MendingProps {
  onComplete: () => void;
}

const CRACKS_COUNT = 4;

const Stage3Mending: React.FC<Stage3MendingProps> = ({ onComplete }) => {
  const [mendedCracks, setMendedCracks] = useState<boolean[]>(Array(CRACKS_COUNT).fill(false));

  const handleMend = (id: number) => {
    const newMendedCracks = [...mendedCracks];
    newMendedCracks[id] = true;
    setMendedCracks(newMendedCracks);
  };
  
  const allMended = mendedCracks.every(c => c);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-amber-100">3단계: 금 메우기</h3>
        <p className="text-amber-200 mt-2">이제 거의 다 됐어요! 금이 간 부분을 눌러서 메워주세요.</p>
      </div>
      
      <div className="relative w-80 h-80">
        <CeladonCracked mendedCracks={mendedCracks} onMend={handleMend} />
      </div>

      <div className="mt-8 text-center h-16">
        {allMended ? (
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-700 animate-pulse shadow-md"
          >
            복원 완료!
          </button>
        ) : (
          <div className="flex items-center justify-center text-lg text-amber-100">
            <SparklesIcon className="w-6 h-6 mr-2" />
            <span>남은 금: {mendedCracks.filter(c => !c).length}개</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stage3Mending;