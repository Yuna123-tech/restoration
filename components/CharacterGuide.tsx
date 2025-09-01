
import React from 'react';

interface CharacterGuideProps {
  message: string;
}

const CharacterGuide: React.FC<CharacterGuideProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center my-8 gap-4">
      <div className="w-24 h-24 bg-[#D9F7D4] rounded-full flex items-center justify-center text-4xl transform -scale-x-100">
        🧭
      </div>
      <div className="relative bg-white p-4 rounded-lg shadow-md max-w-md">
        <p className="text-lg text-gray-700">{message}</p>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45"></div>
      </div>
    </div>
  );
};

export default CharacterGuide;
