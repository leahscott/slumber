import React from 'react';
import SoundNodeList from './SoundNodeList';
import AudioControls from './AudioControls';

function App () {
  return (
    <div className="App">
      <header className="greeting">
        <h1 className="logo">Slumber</h1>
        <h2 className="subtitle">The key to a good night's sleep.</h2>
      </header>
      <div className="container">
        <AudioControls />
        <SoundNodeList />
      </div>
    </div>
  );
}

export default App;
