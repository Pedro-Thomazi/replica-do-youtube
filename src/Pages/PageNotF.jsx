import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'

import styles from './PageNotF.module.css'
import { NavLink } from 'react-router-dom'

const PageNotF = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.container}>
        <h2>Pagina não encontrada.</h2>
        <NavLink className={styles.link} to='/'>Voltar para Home</NavLink>
      </div>
    </>

  )
}

export default PageNotF