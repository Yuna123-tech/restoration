
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { JOB_DATA } from '../constants';
import { Job } from '../types';
import Modal from '../components/Modal';

const ResultPage: React.FC = () => {
  const { selectedHeritage, isRestored } = useGame();
  const navigate = useNavigate();
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  useEffect(() => {
    if (!isRestored || !selectedHeritage) {
      navigate('/map');
    }
  }, [isRestored, selectedHeritage, navigate]);

  if (!selectedHeritage) {
    return null;
  }
  
  const JobCard: React.FC<{ job: Job }> = ({ job }) => (
    <div
      className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300"
      onClick={() => setActiveJob(job)}
    >
      <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500">
        <job.icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
      </div>
    </div>
  );

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">복원 성공!</h1>
      <p className="text-xl text-gray-700 mb-6">
        정말 대단해요! {selectedHeritage.name}이(가) 당신 덕분에 원래 모습을 되찾았어요!
      </p>

      <img
        src={selectedHeritage.restoredImg}
        alt={`${selectedHeritage.name} (복원됨)`}
        className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl mb-12"
      />

      <div className="bg-[#D9F7D4] p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">나도 국가유산 지킴이가 될래요!</h2>
        <p className="text-lg text-gray-600 mb-8">
            문화유산을 지키고 복원하는 멋진 직업들이 많이 있답니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOB_DATA.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/map')}
        className="mt-12 px-8 py-3 bg-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
      >
        다른 유산 복원하러 가기
      </button>

      <Modal isOpen={!!activeJob} onClose={() => setActiveJob(null)}>
        {activeJob && (
          <div className="p-4 text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500">
                <activeJob.icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold">{activeJob.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{activeJob.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ResultPage;
