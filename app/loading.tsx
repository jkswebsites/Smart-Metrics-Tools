import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <FiRefreshCcw className="animate-spin text-5xl text-yellow-500" />
        <p>Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
