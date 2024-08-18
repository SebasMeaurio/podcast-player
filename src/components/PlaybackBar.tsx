import React from 'react';
import styles from './PlaybackBar.module.css';

const PlaybackBar: React.FC = () => {
  return (
    <div className={styles.playbackBar}>
      <div className={styles.trackInfo}>
        <img src="src/assets/Imagenes/musicLogo.png" alt="Track cover" className={styles.cover} />
        <div>
          <p className={styles.trackTitle}>Title</p>
          <p className={styles.trackArtist}>Artist</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.prev}>⏮</button>
        <button className={styles.play}>⏯</button>
        <button className={styles.next}>⏭</button>
      </div>
      <div className={styles.volume}>
        <label htmlFor="volume">🔊</label>
        <input type="range" id="volume" name="volume" min="0" max="100" />
      </div>
    </div>
  );
};

export default PlaybackBar;
