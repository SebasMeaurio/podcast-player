import React from 'react';
import styles from './ListenAgain.module.css';

// Datos de ejemplo para las listas de reproducción y canciones
const playlists = [
  { id: 1, title: 'Californication', cover:"https://i.scdn.co/image/ab67616d00001e02a9249ebb15ca7a5b75f16a90"},
  { id: 2, title: 'Whiskey in the Jar', cover: "https://i.scdn.co/image/ab67616d00001e0275e6375e11550746705a9645" },
  { id: 3, title: 'Falling Away from Me', cover: "https://i.scdn.co/image/ab67616d00001e021c229cb7c9851fb0c67e2af8" },
  ];

const songs = [
  { id: 1, title: 'Rock del gato', artist: 'Ratones Paranoicos', cover: "https://i.scdn.co/image/ab67616d00001e027d032e1ed6d0bc6ed155cc27" },
  { id: 2, title: 'Homero', artist: 'Viejas Locas', cover: "https://i.scdn.co/image/ab67616d00001e02df3f8fd1d8e59db737afc889" },
  { id: 3, title: 'Murgitas del sur', artist: 'Bersuit', cover: "https://i.scdn.co/image/ab67616d00001e02a0fc7851f47a216e9a902aa6" },
];

const ListenAgain: React.FC = () => {
  return (
    <section className={styles.listenAgain}>
      <h2 className={styles.sectionTitle}>Escuchadas recientemente</h2>
      <div className={styles.playlists}>
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.playlist}>
            <img src={playlist.cover} alt={playlist.title} />
            <p>{playlist.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.songs}>
      <h2 className={styles.sectionTitle}>Relacionadas</h2>
        {songs.map((song) => (
          <div key={song.id} className={styles.song}>
            <img src={song.cover} alt={song.title} />
            <div>
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListenAgain;
