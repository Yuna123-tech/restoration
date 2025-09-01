import React, { useState } from 'react';
import { CeladonAssembling, CeladonPiece0, CeladonPiece1, CeladonPiece2 } from './CeladonAssets';
import { PuzzleIcon } from './icons';

interface Stage2AssemblingProps {
  onComplete: () => void;
}

const PIECES_COUNT = 3;

const Stage2Assembling: React.FC<Stage2AssemblingProps> = ({ onComplete }) => {
  const [placedPieces, setPlacedPieces] = useState<boolean[]>(Array(PIECES_COUNT).fill(false));
  const [draggedPiece, setDraggedPiece] = useState<number | null>(null);
  const [isOverTarget, setIsOverTarget] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData('pieceId', id.toString());
    e.dataTransfer.effectAllowed = 'move';
    setDraggedPiece(id);
  };
  
  const handleDragEnd = () => {
    setDraggedPiece(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleDragEnter = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    if (draggedPiece === targetId) {
      setIsOverTarget(targetId);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOverTarget(null);
  };

  const handleDrop = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    const pieceId = parseInt(e.dataTransfer.getData('pieceId'), 10);
    if (pieceId === targetId) {
      const newPlacedPieces = [...placedPieces];
      newPlacedPieces[targetId] = true;
      setPlacedPieces(newPlacedPieces);
    }
    setIsOverTarget(null);
    setDraggedPiece(null);
  };
  
  const allPlaced = placedPieces.every(p => p);

  const pieceComponents = [
    <CeladonPiece0 />,
    <CeladonPiece1 />,
    <CeladonPiece2 />,
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-amber-100">2단계: 조각 조립</h3>
        <p className="text-amber-200 mt-2">깨진 조각을 끌어서 알맞은 자리에 붙여주세요.</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        <div className="relative w-80 h-80">
          <CeladonAssembling 
            placedPieces={placedPieces} 
            onDrop={handleDrop} 
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            isOverTarget={isOverTarget}
            />
        </div>

        <div className="flex flex-row md:flex-col gap-4 p-4 bg-black/20 rounded-lg h-full justify-center shadow-inner">
          {pieceComponents.map((Piece, index) => (
            !placedPieces[index] && (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                className="w-28 h-28 cursor-grab active:cursor-grabbing transition-transform hover:scale-110"
                aria-label={`고려청자 조각 ${index + 1}`}
              >
                {Piece}
              </div>
            )
          ))}
        </div>
      </div>

      <div className="mt-8 text-center h-16">
        {allPlaced ? (
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-teal-600 text-white font-bold text-lg rounded-full hover:bg-teal-700 animate-pulse shadow-md"
          >
            다음 단계로
          </button>
        ) : (
          <div className="flex items-center justify-center text-lg text-amber-100">
             <PuzzleIcon className="w-6 h-6 mr-2" />
            <span>남은 조각: {placedPieces.filter(p => !p).length}개</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stage2Assembling;