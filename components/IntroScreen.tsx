import React from 'react';
import { CeladonBroken } from './CeladonAssets';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-semibold text-amber-100 mb-4">도와주세요! 소중한 고려청자가 부서졌어요.</h3>
      <p className="text-amber-200 mb-6">함께 힘을 합쳐 원래의 아름다운 모습으로 되돌려 볼까요?</p>
      <div className="w-64 h-64 my-4">
        <CeladonBroken />
      </div>
      <button
        onClick={onStart}
        className="mt-8 px-8 py-3 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-700 transition-colors transform hover:scale-105 shadow-md"
      >
        복원 시작하기
      </button>
    </div>
  );
};

export default IntroScreen;