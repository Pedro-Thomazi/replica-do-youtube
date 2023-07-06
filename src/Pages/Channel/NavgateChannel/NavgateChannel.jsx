import { NavLink } from 'react-router-dom'

import styles from './NavgateChannel.module.css'

const NavgateChannel = () => {
  return (
    <nav className={styles.containerNavigator}>
        <ul>
            <li>
                <NavLink to='/channel'>INÍCIO</NavLink>
            </li>
            <li>
                <NavLink to='/pageNotF'>VÍDEOS</NavLink>
            </li>
            <li>
                <NavLink to='/pageNotF'>SHORTS</NavLink>
            </li>
            <li>
                <NavLink to='/pageNotF'>AO VIVO</NavLink>
            </li>
            <li>
                <NavLink to='/pageNotF'>PLAYLIST</NavLink>
            </li>
            <li>
                <NavLink to='/pageNotF'>CANAIS</NavLink>
            </li>
            <li>
                <NavLink to='/pageNotF'>SOBRE</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavgateChannel