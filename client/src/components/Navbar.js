import { Link } from "react-router-dom"
import styles from '../styles/App.module.css'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

    return(
        <header className={styles.appHeader}>
          <img src="/project-logo.png" alt="Logo" className={styles.appLogo} />
          <nav className={styles.appNav}>
            <Link to="/" className={styles.appLink}>Home</Link>
            <Link to="/upload" className={styles.appLink}>Upload</Link>
            <Link to="/SearchPage" className={styles.appLink}>Search</Link>
            <Link to = "/Library" className={styles.appLink}>Library</Link>
            <div className={styles.appUserGroup}>
            {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick} className={styles.logoutButton}>Log out</button>
            </div>
            )}
            {!user && (
              <nav className={styles.appNav}>
                <Link to="/login" className={styles.appLink}>Login</Link>
                <Link to="/signup" className={styles.appLink}>Signup</Link>
              </nav>
            )}
          </div>
          </nav>
        </header>
    )
}

export default Navbar