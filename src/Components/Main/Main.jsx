import styles from './Main.module.css'
import NavbarMain from './NavbarMain/NavbarMain'

import imageVideo from '../../Images/fotoDoVideo.png'
import user from '../../Images/user.png'
import { Link } from 'react-router-dom'

const Main = () => {

  const topics = [
    'Música',
    'Jogo',
    'Ao vivo',
    'Música brasileira',
    'Animação',
    'Programas de jogos',
    'Engenharia elétrica'
  ]

  const videoGenerator = () => {
    const qtdVideos = 4
    const videos = []

    for (let i = 1; i <= qtdVideos; i++) {
      videos.push(i)
    }

    return videos
  }

  return (
    <main className={styles.main}>
      <NavbarMain />
      <div className={styles.videos}>
        <ul>
          {videoGenerator().map((video) => (
            <Link key={video} className={styles.link} to='/pageVideo'>
              <li>
                <img className={styles.videoPhoto} src={imageVideo} alt="Foto do vídeo" />
                <span className={styles.titles}>
                  <Link to='/channel'><img className={styles.channelPhoto} src={user} alt="Foto do canal" /></Link>
                  <h3>Titulo Titulo Titulo Titulo Titulo Titulo</h3>
                </span>
                <Link to='/channel'>
                  <p className={styles.channelName}>Nome do canal</p>
                </Link>
                <span className={styles.visualizations}>
                  <p>5 mi de visualizações</p>
                  <i className="bi bi-dot"></i>
                  <p>há 2 meses</p>
                </span>
              </li>
            </Link>
          ))}
        </ul>

        <hr />

        {topics.map((topic, id) => (
          <div key={id}>
            <h2>{topic}</h2>
            <ul>
              {videoGenerator().map((video) => (
                <Link key={video} className={styles.link} to='/pageVideo'>
                  <li>
                    <img className={styles.videoPhoto} src={imageVideo} alt="Foto do vídeo" />
                    <span className={styles.titles}>
                      <Link to='/channel'><img className={styles.channelPhoto} src={user} alt="Foto do canal" /></Link>
                      <h3>Titulo Titulo Titulo Titulo Titulo Titulo</h3>
                    </span>
                    <p className={styles.channelName}>Nome do canal</p>
                    <span className={styles.visualizations}>
                      <p>2,2 mi de visualizações</p>
                      <i className="bi bi-dot"></i>
                      <p>há 3 meses</p>
                    </span>
                  </li>
                </Link >
              ))}
            </ul>
            <hr />
          </div>
        ))}
      </div>
    </main >
  )
}

export default Main