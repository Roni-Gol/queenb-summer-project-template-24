import { Link } from "react-router-dom"
import styles from '../styles/App.module.css';

const Navbar = () => {
    return(
        <header className={styles.appHeader}>
          <img src="/project-logo.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
            <Link to="/upload" className={styles.appLink}>Upload</Link>
          </nav>
        </header>
    )
}

export default Navbar