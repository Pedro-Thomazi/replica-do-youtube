import BtnLogin from '../BtnLogin/BtnLogin'
import styles from './Header.module.css'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.configsLeft}>
                <label htmlFor="toggle"><i className={`bi bi-list ${styles.btnHamb}`}></i></label>
                <Link className={styles.linkHome} to='/'>
                    <h1>
                        <i className="bi bi-youtube"><span></span></i>
                        YouTube
                    </h1>
                </Link>
            </div>

            <div className={styles.configsCenter}>
                <span>
                    <input type="search" name="keyboard" id="keyboard" placeholder='Pesquisar' />
                    <i className={`bi bi-keyboard-fill ${styles.keyboard}`}></i>
                    <div><i className={`bi bi-search ${styles.search}`}></i></div>
                </span>
                <div className={styles.containerMic}><i className={`bi bi-mic-fill ${styles.mic}`}></i></div>
            </div>

            <div className={styles.configsRight}>
                <i className={`bi bi-search ${styles.search2}`}></i>
                <i className={`bi bi-bell ${styles.bell}`}></i>
                <i className={`bi bi-three-dots-vertical ${styles.threeDots}`}></i>
                <BtnLogin />
            </div>
        </header>
    )
}

export default Header