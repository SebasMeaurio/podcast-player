import React from 'react';
import styles from './RecommendedAlbums.module.css';

interface Album {
  id: number;
  title: string;
  artist: string;
  cover: string;
}

const RecommendedAlbums: React.FC = () => {
  const albums: Album[] = [
    { id: 1, title: 'Comfort Y Musica Para Volar', artist: 'Soda Stereo', cover: "https://i.scdn.co/image/ab67616d00001e023875f29a2a8234ac7ef2706a" },
    { id: 2, title: 'Hermanos De Sangre', artist: 'Viejas Locas', cover: "https://i.scdn.co/image/ab67616d00001e02500545332e01254162fa1ce5" },
    { id: 3, title: 'La Mosca Y La Sopa', artist: 'Redonditos De Ricota', cover: "https://i.scdn.co/image/ab67616d00001e021c0740bf2b983943ca25a15d" },
   
  ];

  const similar = [
    { id: 1, artist: 'Indio Solari', cover: "https://i.scdn.co/image/ab67616d00001e0203060ada5eee108fb77f2ac9" },
    { id: 2, artist: 'Gustavo Cerati', cover: "https://i.scdn.co/image/ab67616d00001e021152471596980e1bba03b6ab" },
    { id: 3, artist: 'Pity Alvarez', cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84fdfeb19f106764abba0e6191"},
  ];
  

  return (
    <section className={styles.recommendedAlbums}>
      <h1>Albumes Recomendados</h1>
      <div className={styles.albums}>
        {albums.map((album) => (
          <div key={album.id} className={styles.album}>
            <img src={album.cover} alt={`${album.title} cover`} />
            <div>
              <p>{album.title}</p>
              <p>{album.artist}</p>
            </div>
          </div>
        ))}
    <div className={styles.similar}>
    <h2 className={styles.sectionTitle}>Artistar Recomendados</h2>
        {similar.map((similar) => (
          <div key={similar.id} className={styles.similar}>
            <img src={similar.cover}  />
            <div>
              
              <p>{similar.artist}</p>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
}

export default RecommendedAlbums;
