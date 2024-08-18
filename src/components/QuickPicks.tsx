import React from 'react';
import styles from './QuickPicks.module.css';

interface QuickPick {
  id: number;
  title: string;
  cover: string;
}

const QuickPicks: React.FC = () => {
  const quickPicks: QuickPick[] = [
    { id: 1, title: 'Como Estamos Hoy', cover: "https://i.scdn.co/image/ab67616d00001e021b863c4048eabb76b733a5c5" },
    { id: 2, title: 'Pupilas Lejanas', cover: "https://i.scdn.co/image/ab67616d00001e02544db3cf4833b199f258c9e1" },
    { id: 3, title: 'El Fantasma', cover: "https://i.scdn.co/image/ab67616d00001e02c2f2ecbee36586c59284f96d" },
    { id: 4, title: 'Eso Vive', cover: "https://i.scdn.co/image/ab67616d00001e0222486805424e0a939a803b68" },
    { id: 4, title: 'Hacelo Por Mi', cover: "https://i.scdn.co/image/ab67616d00001e02834dbc2fb7fc8fb32cd593ff" },
  ];

  return (
    <aside className={styles.quickPicks}>
      <h2>Canciones Sugeridas</h2>
      <div className={styles.picks}>
        {quickPicks.map((pick) => (
          <div key={pick.id} className={styles.pick}>
            <img src={pick.cover} alt={pick.title} />
            <p>{pick.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default QuickPicks;
