
import React from 'react';
import { Link } from 'react-router-dom';
import CharacterGuide from '../components/CharacterGuide';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <div className="animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">문화유산 지킴이</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8">시간 여행자의 모험</h2>
      </div>

      <CharacterGuide message="안녕! 나는 시간 여행 가이드 '지킴이'야. 소중한 우리 문화유산이 아파하고 있어. 함께 시간 여행을 떠나 도와주지 않을래?" />
      
      <Link 
        to="/map"
        className="mt-8 px-8 py-4 bg-yellow-400 text-gray-800 font-bold text-xl rounded-full shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 animate-pulse"
      >
        시간 여행 시작!
      </Link>
      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
