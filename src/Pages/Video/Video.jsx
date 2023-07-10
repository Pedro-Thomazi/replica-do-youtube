import styles from './Video.module.css'

import Header from '../../Components/Header/Header'
import NavbarVideos from '../../Components/NavbarVideos/NavbarVideos'

import photoVideo from '../../Images/fotoDoVideo.png'
import photoChannel from '../../Images/user.png'
import { Link } from 'react-router-dom'

const PageVideo = () => {
    const qtdCommet = () => {
        const qtd = 10
        const comments = []

        for (let i = 1; i <= qtd; i++) {
            comments.push(i)
        }

        return comments
    }


    const videoGenerator = () => {
        const qtdVideos = 10
        const videos = []

        for (let i = 1; i <= qtdVideos; i++) {
            videos.push(i)
        }

        return videos
    }


    return (
        <div>
            <Header />
            <NavbarVideos />
            <main className={styles.containerVideos}>
                <div className={styles.video}>
                    <img className={styles.photoVideo} src={photoVideo} alt="" />
                    <h2>Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo Titulo</h2>
                    <div className={styles.channelAndConfigs}>
                        <div className={styles.channel}>
                            <img className={styles.photoChannel} src={photoChannel} alt="" />
                            <span>
                                <Link to='/channel'>
                                    <h3>Nome do canal</h3>
                                </Link>
                                <p>19,8 mil inscritos</p>
                            </span>
                            <Link className={styles.btnSubscri} to="/pageLogin" >Inscrever-se</Link>
                        </div>
                        <div className={styles.configs}>
                            <span className={styles.btnLikeDislike}>
                                <button className={styles.btnLike}>
                                    <i className="bi bi-hand-thumbs-up"></i> 25 mil
                                </button>
                                <button className={styles.btnDislike}>
                                    <i className="bi bi-hand-thumbs-down"></i>
                                </button>
                            </span>
                            <button className={styles.sendBtn}><i className="bi bi-send"></i><p>Compartilhar</p></button>
                            <button className={styles.saveBtn}><i className="bi bi-cloud-download"></i><p>Salvar</p></button>
                            <button className={styles.dotsBtn}><i className="bi bi-three-dots"></i></button>
                        </div>
                    </div>

                    <input type="checkbox" className={styles.moreComments} name="moreComments" id="moreComments" />
                    <div className={styles.commentsChannel}>
                        <span className={styles.visualiMonthTags}>
                            <p>5 mi de visualizações</p>
                            <p>há 2 meses</p>
                            <p className={styles.hashtags}>#rockhits #rocksongs #rockmusic</p>
                        </span>
                        <span>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui doloribus officiis voluptatem harum. Porro, consectetur id nihil quas magnam eius quo itaque. Enim fuga quibusdam veniam, quis illum voluptate!
                                Esse obcaecati dolorum odio veritatis ullam soluta asperiores dignissimos eveniet aliquid ad hic aspernatur ut impedit suscipit illo voluptas error, porro quaerat ex officia id officiis, magni pariatur. Molestiae, itaque?
                                Rem, provident exercitationem dolores explicabo consequatur aliquam ipsam sapiente harum nihil consectetur est minus dolor, sint quisquam, saepe cumque impedit velit mollitia magni similique. Natus, explicabo? Dolores temporibus rerum molestiae.
                                Consequuntur consectetur repellendus neque! Adipisci aut ab, quo sed harum dolore? Molestias cumque doloremque accusantium quidem, aspernatur, ut minus quasi animi aliquid laboriosam facere suscipit provident perspiciatis ducimus a magnam?
                                Dolore, molestias aspernatur? Reprehenderit, error eaque! Quisquam, beatae laudantium! Nemo adipisci quis deserunt quo culpa ullam eos eum harum! Culpa eum earum molestiae fugit eius nihil quam hic, obcaecati reprehenderit.</p>
                        </span>
                    </div>
                    <label className={styles.moreComm} htmlFor="moreComments">Mostrar mais</label>
                    <label className={styles.lessComm} htmlFor="moreComments">Mostrar menos</label>

                    <div className={styles.qtdCommets}>
                        <h3>234 comentários</h3>
                        <p><i className="bi bi-border-width"></i>Ordenar por</p>
                    </div>

                    <label className={styles.addComment}>
                        <img className={styles.photoChannel} src={photoChannel} alt="" />
                        <span className={styles.comment}>
                            <input type="text" name="comment" id="comment" placeholder='Adicione um comentário...' />
                        </span>
                    </label>

                    <div className={styles.commentsUsers}>

                        {qtdCommet().map((commentUser) => (
                            <ul>
                                <li key={commentUser}>
                                    <img className={styles.photoChannelUserComme} src={photoChannel} alt="" />
                                    <span>
                                        <div className={styles.nameAndMonth}>
                                            <Link to='/channel'>
                                                <h3>@Nome-do-canal</h3>
                                            </Link>
                                            <p>há 2 meses</p>
                                        </div>
                                        <p className={styles.commentUser}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere soluta vero, dolorem autem perspiciatis a eaque architecto et fugiat natus repudiandae nihil assumenda atque, tenetur expedita nam quo maxime.</p>
                                        <span className={styles.containerCommenstUser}>
                                            <button className={styles.btnLikeUserComme}>
                                                <i className="bi bi-hand-thumbs-up"></i> 234
                                            </button>
                                            <button className={styles.btnDislikeUserComm}>
                                                <i className="bi bi-hand-thumbs-down"></i>
                                            </button>
                                            <i className={`bi bi-suit-heart-fill ${styles.heart}`}></i>
                                            <p className={styles.respond}>Responder</p>
                                        </span>
                                        <p className={styles.answers}><i className="bi bi-arrow-down"></i> 24 respostas</p>
                                    </span>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>

                <div className={styles.videos}>
                    <ul>
                        {videoGenerator().map((video) => (
                            <Link to='/pageNotF'>
                                <li key={video} className={styles.othersVideo}>
                                    <img className={styles.videoPhoto} src={photoVideo} alt="Foto do vídeo" />
                                    <span className={styles.titles}>
                                        <h3>Titulo Titulo Titulo Titulo Titulo Titulo</h3>
                                    </span>
                                    <Link className={styles.linkToTheChannel} to='/channel'>
                                        <p className={styles.channelName}>Nome do canal</p>
                                    </Link>
                                    <span className={styles.visualizations}>
                                        <p>2,2 mi de visualizações</p>
                                        <i className="bi bi-dot"></i>
                                        <p>há 3 meses</p>
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default PageVideo