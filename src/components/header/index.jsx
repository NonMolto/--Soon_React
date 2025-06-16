import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
    <header className={styles.header}>
        <span/> Almeida Queiroz Pires <span/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contatos">Contatos</Link>
                <Link to="/">
                    <span>Almeida Queiroz Pires</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header