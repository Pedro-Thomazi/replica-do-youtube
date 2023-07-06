import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <input className={styles.btnHidden} type="checkbox" id="toggle" />
            <nav className={styles.navbarOpen}>
                <div className={styles.firstOptions}>
                    <NavLink to='/'>
                        <span>
                            <i className="bi bi-house-door-fill"></i>
                            <p>Início</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-youtube"></i>
                            <p>Shorts</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageLogin'>
                        <span>
                            <i className="bi bi-youtube"></i>
                            <p>Inscrições</p>
                        </span>
                    </NavLink>
                </div>


                <div className={styles.secondOptions}>
                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-collection-play-fill"></i>
                            <p>Biblioteca</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-clock-history"></i>
                            <p>Hitórico</p>
                        </span>
                    </NavLink>
                </div>


                <div className={styles.thirdOptions}>
                    <p>Faça login para curtir vídeos, comentar e se Inscrever.</p>
                    <NavLink to='/pageLogin'>
                        <span className={styles.btnLogin}>
                            <i className="bi bi-person"></i>
                            Fazer Login
                        </span>
                    </NavLink>
                </div>


                <div className={styles.fourthOptions}>
                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-fire"></i>
                            <p>Em alta</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-bag"></i>
                            <p>Shopping</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-music-note"></i>
                            <p>Música</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-film"></i>
                            <p>Filmes</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-broadcast"></i>
                            <p>Ao vivo</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-controller"></i>
                            <p>Jogos</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-newspaper"></i>
                            <p>Notícias</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-trophy-fill"></i>
                            <p>Esportes</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-lightbulb-fill"></i>
                            <p>Aprender</p>
                        </span>
                    </NavLink>
                </div>
            </nav>

            <nav className={styles.navbarClose}>
                <div>
                    <NavLink to='/'>
                        <span>
                            <i className="bi bi-house-door-fill"></i>
                            <p>Início</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-youtube"></i>
                            <p>Shorts</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageLogin'>
                        <span>
                            <i className="bi bi-youtube"></i>
                            <p>Inscrições</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-collection-play-fill"></i>
                            <p>Biblioteca</p>
                        </span>
                    </NavLink>

                    <NavLink to='/pageNotF'>
                        <span>
                            <i className="bi bi-clock-history"></i>
                            <p>Hitórico</p>
                        </span>
                    </NavLink>
                </div>
            </nav>
        </>

    )
}

export default Navbar