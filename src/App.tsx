import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import MiddleContent from './components/MiddleContent/MiddleContent';
import TopContent from './components/TopContent/TopContent';

function App() {
  return (
    <div className="App">
      <Header />
      <TopContent />
      <MiddleContent />
    </div>
  );
}

export default App;
