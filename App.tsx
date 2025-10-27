
import React from 'react';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col items-center justify-center p-4">
      <Chatbot />
    </div>
  );
};

export default App;
