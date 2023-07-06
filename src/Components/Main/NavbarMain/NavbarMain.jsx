import styles from './NavbarMain.module.css'

import { NavLink, Link } from 'react-router-dom'

const NavbarMain = () => {
  return (
    <nav className={styles.navbarMain}>
        <NavLink to='/'>Tudo</NavLink>
        <Link to='/PageNotF'>Música</Link>
        <Link to='/PageNotF'>Jogo</Link>
        <Link to='/PageNotF'>Ao vivo</Link>
        <Link to='/PageNotF'>Música brasileira</Link>
        <Link to='/PageNotF'>Animação</Link>
        <Link to='/PageNotF'>Programas de jogos</Link>
        <Link to='/PageNotF'>Engenharia elétrica</Link>
        <i className="bi bi-arrow-right-circle-fill"></i>
    </nav>
  )
}

export default NavbarMain