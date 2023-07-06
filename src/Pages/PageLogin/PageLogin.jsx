import { Link } from 'react-router-dom'
import styles from './PageLogin.module.css'

import googleLogo from '../../Images/googleLogo.png'

import { useState } from 'react'

const PageLogin = () => {
    const [email, setEmail] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email)
    }
    return (
        <div className={styles.pageLogin}>
            <form className={styles.form} onSubmit={handleSubmit} >
                <img src={googleLogo} alt="Logo Google" />
                <h2>Fazer login</h2>
                <p className={styles.firstParag}>Prosseguir no YouTube</p>
                <input type="email" name="email" id="email" placeholder='E-mail ou telefone' required onChange={handleEmail} />
                <Link className={styles.dontNowEmail} to='/pageNotF'>Esqueceu seu e-mail?</Link>
                <p className={styles.secondParag}>Não está no seu computador? Use o modo visitante para fazer login com privacidade. <Link className={styles.toKnowMore} to='/pageNotF'>Saiba mais</Link></p>
                <span className={styles.btns}>
                    <Link className={styles.btnCadastre} to='/pageNotF'>Criar conta</Link>
                    <Link to='/pagePassword'>
                        <button type='submit' className={styles.btnNext}>Avançar</button>
                    </Link>
                </span>
            </form>
            <span className={styles.linksContainer}>
                <p>Português (Brasil)</p>
                <span className={styles.links}>
                    <Link to='/pageNotF'>Ajuda</Link>
                    <Link to='/pageNotF'>Privacidade</Link>
                    <Link to='/pageNotF'>Termos</Link>
                </span>
            </span>
        </div>
    )
}

export default PageLogin