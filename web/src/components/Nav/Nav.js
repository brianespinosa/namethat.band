import { Link, routes } from '@redwoodjs/router'

import styles from 'src/layouts/AppLayout/AppLayout.module.css'

const loginStyles = {
  float: 'right',
}

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <Link to={routes.leaderboard()}>Leaderboard</Link>
      <Link to={routes.answers()}>Answers</Link>
      <Link style={loginStyles} to={routes.userSettings()}>
        My Settings
      </Link>
      <a style={loginStyles} href="#">
        Login
      </a>
    </nav>
  )
}

export default Nav
