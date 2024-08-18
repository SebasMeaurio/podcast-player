import React from 'react';
import Header from './components/Header';
import ListenAgain from './components/ListenAgain';
import QuickPicks from './components/QuickPicks';
import RecommendedAlbums from './components/RecommendAlbum';
import PlaybackBar from './components/PlaybackBar';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <QuickPicks />
        <ListenAgain />
        <RecommendedAlbums/>
        <PlaybackBar />
        
        
        
      </div>
    </div>
  );
}

export default App;
