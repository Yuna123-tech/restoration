import React from 'react';
import { CeladonRestored } from './CeladonAssets';

interface CompletionScreenProps {
  onRestart: () => void;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({ onRestart }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-3xl font-bold text-amber-300 mb-4" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>축하합니다!</h3>
      <p className="text-xl text-amber-100 mb-6">고려청자를 성공적으로 복원했어요!</p>
      
      <div className="w-80 h-80 my-4 transform transition-transform duration-500 hover:scale-105">
        <CeladonRestored />
      </div>

      <div className="mt-4 p-4 bg-black/20 rounded-lg max-w-2xl shadow-inner border border-white/10">
        <h4 className="font-semibold text-amber-200">알아보기: 고려청자</h4>
        <p className="text-left text-sm text-amber-100 mt-2">
          고려청자는 고려 시대에 만들어진 아름다운 푸른빛의 도자기입니다. 맑고 투명한 비취색과 표면에 새겨진 섬세한 무늬가 특징이에요. 우리 조상들의 뛰어난 예술 감각과 기술을 보여주는 소중한 국가유산입니다.
        </p>
      </div>

      <button
        onClick={onRestart}
        className="mt-8 px-8 py-3 bg-stone-600 text-white font-bold text-lg rounded-full hover:bg-stone-700 transition-colors shadow-md"
      >
        다시하기
      </button>
    </div>
  );
};

export default CompletionScreen;