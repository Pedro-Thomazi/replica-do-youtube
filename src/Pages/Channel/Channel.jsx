import styles from './Channel.module.css'

import Header from '../../Components/Header/Header'

import { Link } from 'react-router-dom'

import BackGroundImage from '../../Images/fotoDeFundoCanal.webp'
import photoChannel from '../../Images/user.png'
import NavgateChannel from './NavgateChannel/NavgateChannel'
import photoVideo from '../../Images/fotoDoVideo.png'
import NavbarVideos from '../../Components/NavbarVideos/NavbarVideos'

const Channel = () => {
    
    const videoGenerator = () => {
        const qtdVideos = 10
        const videos = []

        for (let i = 1; i <= qtdVideos; i++) {
            videos.push(i)
        }

        return videos
    }


    return (
        <>
            <Header />
            <NavbarVideos />
            <section className={styles.channelContainer}>
                <div className={styles.onlyBorderBotton}>
                    <span className={styles.imageChannelContainer}>
                        <img className={styles.imageChannel} src={BackGroundImage} alt="Imagem de fundo do canal" />
                    </span>
                    <div className={styles.container}>
                        <span className={styles.containerPrincipal}>
                            <img className={styles.photoChannel} src={photoChannel} alt="Foto do canal" />
                            <span className={styles.channelNameAndDescription}>
                                <h1>Nome do canal</h1>
                                <span>
                                    <p>@NomeDoCanal</p>
                                    <p>52,3 mi de inscritos</p>
                                    <p>1,5 mil vídeos</p>
                                </span>
                                <p className={styles.descriptionChannel}>Descrição v Descrição Descrição Descrição Descrição Descrição Descrição Descrição <Link to='/pageNotF'><i className="bi bi-chevron-right"></i></Link></p>
                            </span>
                        </span>
                        <span className={styles.containerButton}>
                            <Link to='/pageLogin'>
                                <button>Inscreva-se</button>
                            </Link>
                        </span>
                    </div>
                    <NavgateChannel />
                </div>

                <div className={styles.videos}>
                    <ul>
                        {videoGenerator().map((video) => (
                            <Link key={video} to='/pageVideo'>
                                <li className={styles.othersVideo}>
                                    <img className={styles.videoPhoto} src={photoVideo} alt="Foto do vídeo" />
                                    <span className={styles.titles}>
                                        <h3>Titulo Titulo Titulo Titulo Titulo Titulo</h3>
                                    </span>
                                    <Link className={styles.linkToTheChannel} to='/pageNotF'>
                                        <p className={styles.channelName}>Nome do canal</p>
                                    </Link>
                                    <span className={styles.visualizations}>
                                        <p>2,2 mi de visualizações</p>
                                        <p><i className="bi bi-dot"></i>há 3 meses</p>
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </section>


        </>
    )
}

export default Channel