
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <HashRouter>
        <div className="w-full min-h-screen bg-[#F8F8F0] text-gray-800">
          <main className="max-w-4xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </GameProvider>
  );
}

export default App;
