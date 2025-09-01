
import React, { useState, useEffect, useMemo, useCallback } from 'react';

interface PuzzlePiece {
  id: number;
  bgPosition: string;
}

interface PuzzleSlot {
  id: number;
  piece: PuzzlePiece | null;
}

interface PuzzleGameProps {
  imageUrl: string;
  onComplete: () => void;
}

const GRID_SIZE = 3;

const PuzzleGame: React.FC<PuzzleGameProps> = ({ imageUrl, onComplete }) => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [slots, setSlots] = useState<PuzzleSlot[]>([]);
  const [draggedPiece, setDraggedPiece] = useState<PuzzlePiece | null>(null);

  const correctPieces = useMemo(() => {
    const newPieces: PuzzlePiece[] = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const row = Math.floor(i / GRID_SIZE);
      const col = i % GRID_SIZE;
      newPieces.push({
        id: i,
        bgPosition: `${(col * 100) / (GRID_SIZE - 1)}% ${(row * 100) / (GRID_SIZE - 1)}%`,
      });
    }
    return newPieces;
  }, []);

  useEffect(() => {
    const shuffledPieces = [...correctPieces].sort(() => Math.random() - 0.5);
    setPieces(shuffledPieces);

    const initialSlots = correctPieces.map(p => ({ id: p.id, piece: null }));
    setSlots(initialSlots);
  }, [correctPieces]);
  
  const checkCompletion = useCallback(() => {
    const isComplete = slots.every(slot => slot.piece && slot.piece.id === slot.id);
    if (isComplete) {
      setTimeout(onComplete, 500);
    }
  }, [slots, onComplete]);

  const handleDragStart = (piece: PuzzlePiece) => {
    setDraggedPiece(piece);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
    
  const handleDrop = (slotId: number) => {
    if (!draggedPiece) return;

    const newSlots = [...slots];
    const targetSlot = newSlots.find(s => s.id === slotId);
    
    // Prevent dropping if slot is already correctly filled
    if (targetSlot && targetSlot.piece && targetSlot.piece.id === targetSlot.id) {
        return;
    }
    
    // Find if the piece was in another slot and remove it
    const sourceSlot = newSlots.find(s => s.piece?.id === draggedPiece.id);
    if(sourceSlot) {
        sourceSlot.piece = null;
    }

    if(targetSlot) {
       targetSlot.piece = draggedPiece;
    }

    setSlots(newSlots);

    const newPieces = pieces.filter(p => p.id !== draggedPiece.id);
    setPieces(newPieces);

    setDraggedPiece(null);
  };

  useEffect(() => {
    // Check completion whenever slots change
    if(slots.some(s => s.piece !== null)) { // only check if there is at least one piece on board
      checkCompletion();
    }
  }, [slots, checkCompletion]);

  const solvedCount = slots.filter(s => s.piece && s.piece.id === s.id).length;
  const progress = Math.round((solvedCount / (GRID_SIZE * GRID_SIZE)) * 100);

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Puzzle Board */}
      <div className="w-full max-w-md mx-auto">
        <h3 className="text-xl text-center font-bold mb-4">퍼즐을 맞춰 유산을 복원해요!</h3>
        <div
          className="grid gap-1 bg-gray-300 p-1 rounded-lg shadow-inner"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
        >
          {slots.map(slot => (
            <div
              key={slot.id}
              className="aspect-square bg-gray-200 border-2 border-dashed border-gray-400 rounded-md"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(slot.id)}
            >
              {slot.piece && (
                <div
                  className="w-full h-full bg-cover bg-no-repeat rounded-md cursor-pointer"
                  style={{ 
                    backgroundImage: `url(${imageUrl})`, 
                    backgroundPosition: slot.piece.bgPosition,
                    backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden">
            <div 
                className="bg-[#60A5FA] h-4 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
            ></div>
        </div>
        <p className="text-center mt-2 font-semibold">복원율: {progress}%</p>
      </div>

      {/* Piece Bank */}
      <div className="w-full md:w-64 bg-yellow-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg text-center font-bold mb-4">남은 조각들</h3>
        <div 
            className="grid gap-2"
            style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {pieces.map(piece => (
            <div
              key={piece.id}
              draggable
              onDragStart={() => handleDragStart(piece)}
              className="aspect-square bg-cover bg-no-repeat cursor-grab active:cursor-grabbing rounded-md shadow-sm"
              style={{ 
                backgroundImage: `url(${imageUrl})`, 
                backgroundPosition: piece.bgPosition,
                backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`
              }}
            />
          ))}
        </div>
        {pieces.length === 0 && <p className="text-center text-gray-500 mt-4">모든 조각을 사용했어요!</p>}
      </div>
    </div>
  );
};

export default PuzzleGame;
