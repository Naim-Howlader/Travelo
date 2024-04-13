import React from 'react';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-10 flex items-center justify-center  bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="relative">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 pr-1 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="w-[350px] h-[200px] sm:w-[500px] sm:h-[300px] lg:w-[700px] lg:h-[400px]">
          <iframe title="Video" src="https://www.youtube.com/embed/9-CuT-kwuMM?si=EeO4prHuJjkYTErX" className="w-full h-full rounded-lg" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
