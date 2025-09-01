
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import PuzzleGame from '../components/PuzzleGame';

const GamePage: React.FC = () => {
  const { selectedHeritage, setRestored } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedHeritage) {
      // If no heritage is selected (e.g., page refresh), go back to map
      navigate('/map');
    }
  }, [selectedHeritage, navigate]);

  const handleGameComplete = () => {
    setRestored(true);
    // You can add a success animation or message here before navigating
    setTimeout(() => {
        navigate('/result');
    }, 1000);
  };

  if (!selectedHeritage) {
    return null; // or a loading spinner
  }

  return (
    <div className="p-4 md:p-8 bg-[#E0F2F7] rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">{selectedHeritage.name} 복원하기</h1>
      <p className="text-center text-gray-600 mb-8">흩어진 조각들을 맞추어 원래의 아름다운 모습을 되찾아주세요!</p>
      
      <PuzzleGame 
        imageUrl={selectedHeritage.damagedImg}
        onComplete={handleGameComplete}
      />
    </div>
  );
};

export default GamePage;
