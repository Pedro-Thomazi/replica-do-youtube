import { Link } from 'react-router-dom'
import styles from './BtnLogin.module.css'

const BtnLogin = () => {
    return (
        <Link className={styles.configsRight} to='/pageLogin'>
            <span>
                <i className="bi bi-person"></i>
                Fazer Login
            </span>
        </Link>
    )
}

export default BtnLogin