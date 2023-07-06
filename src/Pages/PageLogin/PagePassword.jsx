import styles from './PagePassword.module.css'

import Pare from '../../Images/pare.jpg'
import { Link } from 'react-router-dom'

const PagePassword = () => {
  return (
    <div className={styles.pagePassword}>
        <span>
            <h1>PARE</h1>
            <img src={Pare} alt="Pare por favor"/>
            <h2>Pare por favor!</h2>
        </span>
        <Link to='/'>Início</Link>
    </div>
  )
}

export default PagePassword