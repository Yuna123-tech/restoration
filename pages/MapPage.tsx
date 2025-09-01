
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HERITAGE_DATA } from '../constants';
import { Heritage } from '../types';
import { useGame } from '../context/GameContext';
import Modal from '../components/Modal';

const MapPage: React.FC = () => {
  const [activeHeritage, setActiveHeritage] = useState<Heritage | null>(null);
  const { selectHeritage } = useGame();
  const navigate = useNavigate();

  const handleIconClick = (heritage: Heritage) => {
    setActiveHeritage(heritage);
  };

  const handleStartRestoration = () => {
    if (activeHeritage) {
      selectHeritage(activeHeritage);
      navigate('/game');
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 my-4">어디로 시간 여행을 떠나볼까?</h1>
      <p className="text-lg text-gray-600 mb-8">도움이 필요한 문화유산을 선택해 줘!</p>
      
      <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] bg-blue-100 rounded-lg shadow-lg overflow-hidden">
        {/* Placeholder for map image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/map/1200/900')"}}>
            <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                {/* Simplified path of South Korea for context */}
                <path d="M220,30 L200,50 L180,40 L160,60 L130,80 L120,120 L130,150 L110,180 L140,220 L170,250 L200,240 L230,260 L260,230 L280,200 L270,150 L290,120 L270,80 L250,50 Z" 
                fill="#D9F7D4" stroke="#A8D5BA" strokeWidth="2" />
            </svg>
        </div>

        {HERITAGE_DATA.map((heritage) => (
          <button
            key={heritage.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
            style={{ top: heritage.location.top, left: heritage.location.left }}
            onClick={() => handleIconClick(heritage)}
          >
            <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
            <span className="mt-2 px-2 py-1 bg-white text-sm font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              {heritage.name}
            </span>
          </button>
        ))}
      </div>

      <Modal isOpen={!!activeHeritage} onClose={() => setActiveHeritage(null)}>
        {activeHeritage && (
          <div className="text-center p-4">
            <h2 className="text-2xl font-bold mb-4">{activeHeritage.name}</h2>
            <img 
              src={activeHeritage.damagedImg} 
              alt={`${activeHeritage.name} (손상됨)`} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-6">{activeHeritage.description}</p>
            <button
              onClick={handleStartRestoration}
              className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
            >
              복원 시작!
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MapPage;
